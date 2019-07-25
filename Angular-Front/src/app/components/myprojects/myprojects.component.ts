import { Component, OnInit } from '@angular/core';
import {KLEXService} from "../../service/klex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

    user:any;
    project :any;

  constructor(

      public klexService:KLEXService,
      private router:Router
  ) { }

  ngOnInit() {
      /*const user = {
         // userid:this.user.id
      };
      console.log(user);

      this.klexService.getProject().subscribe((res:any) =>{
          if(res.state) {
              this.project = res.project;
              console.log(this.project);
          }
          else {
              console.log("cannot find ");
          }

      });*/

      }












}
