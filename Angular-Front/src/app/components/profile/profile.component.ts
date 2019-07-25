import { Component, OnInit } from '@angular/core';
import { KLEXService } from "../../service/klex.service";
import {Router} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    name: String;
    username : String;
    email : String;
    password :String;

    user:any;


  constructor(
      private klexService:KLEXService,
      private router:Router,
      private http:HttpClientModule
  ) {}

  ngOnInit() {

      /*this.getprofileData(this.route.snapshot.params['id']);*/

      this.klexService.getProfile().subscribe((res:any) =>{
         this.user = res.user;
         console.log(this.user);
      });




  }
   /* getprofileData(id){
      this.http.get('/profile/'+id).subscribe(data =>{
         this.user = data;
      });
    }*/
  /*updateProfileData(id,user){

      this.klexService.updateProfile(id,user);
        console.log(user);
  }*/
}








