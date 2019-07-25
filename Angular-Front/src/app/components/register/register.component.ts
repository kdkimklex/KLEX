import { Component, OnInit } from '@angular/core';
import { KLEXService } from '../../service/klex.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  name: String;
  username : String;
  email : String;
  password :String;

  user:any;

  constructor(
      private klexService:KLEXService,
      private ngFlashMessageService: NgFlashMessageService,
      private router:Router

  ) { }

  ngOnInit() {
  }
  registerData() {
      const user = {

          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password
      };

      this.klexService.registerUser(user).subscribe((res:any)=> {
          if(res.user){
              console.log("Data inserted");
         this.ngFlashMessageService.showFlashMessage({
              // Array of messages each will be displayed in new line
              messages: ["You're Registered"],
              // Whether the flash can be dismissed by the user defaults to false
              dismissible: true,
              // Time after which the flash disappears defaults to 2000ms
              timeout: false,
              // Type of flash message, it defaults to info and success, warning, danger types can also be used
              type: 'danger'
          });}
          //this.router.navigate(['/login']);}

          else{
              this.ngFlashMessageService.showFlashMessage({
                  // Array of messages each will be displayed in new line
                  messages: ["Something went Wrong!"],
                  // Whether the flash can be dismissed by the user defaults to false
                  dismissible: true,
                  // Time after which the flash disappears defaults to 2000ms
                  timeout: false,
                  // Type of flash message, it defaults to info and success, warning, danger types can also be used
                  type: 'danger'
              });
              //this.router.navigate(['/register']);

          }

      });

     }

  }

