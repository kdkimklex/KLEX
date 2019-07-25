import { Component, OnInit } from '@angular/core';
import {KLEXService} from "../../service/klex.service";


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
    projectname : String;
    description : String;
    private : String;
    internal : String;
    public : String;

    group:any;

  constructor(
      private klexService:KLEXService
  ) { }

  ngOnInit() {
  }
    CreateGrouptData(){

        const group = {

            groupname: this.projectname,
            description: this.description,
            private : this.private,
            internal:this.internal,
            public:this.public

        };

        console.log(group);
       // console.log(this.private);
        //console.log(this.internal);
        //console.log(this.public);

        this.klexService.CreateGroup(group).subscribe((res: any) => {
            if(res.state){
                console.log("Data inserted");
            }
            else {
                console.log("Data is not inserted");
            }


        });
    }



}
