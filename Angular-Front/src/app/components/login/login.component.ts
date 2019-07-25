import { Component, OnInit } from '@angular/core';
import { KLEXService } from '../../service/klex.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: String;
    password: String;

    constructor(
        private klexService:KLEXService,
        private ngFlashMessageService: NgFlashMessageService,
        private router:Router
    ) {

    }

    ngOnInit() {
    }

    LoginUser() {
        const user = {
            email: this.email,
            password: this.password
        };
        this.klexService.loginUser(user).subscribe(  (res:any)=> {
            if(res.state) {
                this.ngFlashMessageService.showFlashMessage({
                    // Array of messages each will be displayed in new line
                    messages: ["You're Logged in"],
                    // Whether the flash can be dismissed by the user defaults to false
                    dismissible: true,
                    // Time after which the flash disappears defaults to 2000ms
                    timeout: false,
                    // Type of flash message, it defaults to info and success, warning, danger types can also be used
                    type: 'danger'
                });/*this.router.navigate(['/login']);}*/
                this.klexService.storeData(res.token,res.user);}


            else{
                this.ngFlashMessageService.showFlashMessage({
                    // Array of messages each will be displayed in new line
                    messages: ["Incorrect Password,Try again"],
                    // Whether the flash can be dismissed by the user defaults to false
                    dismissible: true,
                    // Time after which the flash disappears defaults to 2000ms
                    timeout: false,
                    // Type of flash message, it defaults to info and success, warning, danger types can also be used
                    type: 'danger'
                });
                //this.router.navigate(['/login']);


            }
        });

    }
}
