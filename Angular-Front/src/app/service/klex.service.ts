import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map }  from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})

export class KLEXService {


    user: any;
    project: any;
    group: any;
    task :any;
    klextoken: any;

    constructor(
        private http: HttpClient,
        public jwtHelper: JwtHelperService
    ) {
    }

    registerUser(user) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post("http://localhost:3000/user/register", user, {headers: headers}).pipe(map(res => res));

    }

    loginUser(user) {

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post("http://localhost:3000/user/login", user, {headers: headers}).pipe(map(res => res));

    }
    fetchToken() {

        const token = localStorage.getItem("tokenid");
        this.klextoken = token;
    }

    storeData(token, userdata) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.klextoken = token;
        this.user = userdata;

    }

    getProfile() {
        this.fetchToken();

        let headers = new HttpHeaders().set('Authorization', this.klextoken);
        headers.append('Content-Type', 'application/json');
        //console.log("hello");
        return this.http.get("http://localhost:3000/user/profile", {headers: headers}).pipe(map(res => res));


    }
    getProject(){

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/user/project",{headers: headers}).pipe(map(res => res));


    }


    logout() {


        this.klextoken = null;
        this.user = null;
        localStorage.clear();
    }

    LoggedIn() {
        this.jwtHelper = new JwtHelperService();
        const token = localStorage.getItem('tokenid');
        //console.log(this.jwtHelper.isTokenExpired());
        return !this.jwtHelper.isTokenExpired(token);

    }

    CreateProject(project) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post("http://localhost:3000/user/saveProject", project, {headers: headers}).pipe(map(res => res));


    }

    CreateGroup(group) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post("http://localhost:3000/user/saveGroup", group, {headers: headers}).pipe(map(res => res));


    }

    CreateTask(task) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post("http://localhost:3000/user/savetask", task, {headers: headers}).pipe(map(res => res));


    }

   /* updateProfile(id ,user){
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.put("http://localhost:3000/user/saveProject" + `/${user._id}`, user, {headers: headers}).pipe(map(res => res));


    }*/



}




