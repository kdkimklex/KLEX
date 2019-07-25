import { Component, OnInit } from '@angular/core';
import {KLEXService} from "../../service/klex.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {



    projectname : String;
    tasktitle : String;
    startdate : String;
    duedate : String;

    task :any;



  constructor(
      private klexService:KLEXService
  ) { }

  ngOnInit() {
  }
    CreateTaskData(){

        const task = {

            projectname : this.projectname,
            tasktitle : this.tasktitle,
            startdate : this.startdate,
            duedate : this.duedate

        };


        this.klexService.CreateTask(task).subscribe((res: any) => {
            if(res.state){
                console.log("Data inserted");
            }
            else {
                console.log("Data is not inserted");
            }


        });
    }

}
