import { Component, OnInit } from '@angular/core';
import {KLEXService} from "../../service/klex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    projectname : String;
    description : String;
    email : String;
    //ownerid :String;

    user:any;
    project :any;

  constructor(
      private klexService:KLEXService,
      private router:Router
  ) { }

  ngOnInit() {

     /* this.klexService.getProject().subscribe((res:any) =>{
          this.project = res.project;
          console.log(this.project);
      });*/
  }

    CreateProjectData() {

        const project = {

            projectname: this.projectname,
            description: this.description,
            email: this.email,
            //ownerid: this.user.id


        };
        console.log(project);

        this.klexService.CreateProject(project).subscribe((res: any) => {
            if(res.state){
                console.log("Data inserted");
            }
            else {
                console.log("Data is not inserted");
            }
           //this.router.navigate(['/project']);

            });


    }
}
