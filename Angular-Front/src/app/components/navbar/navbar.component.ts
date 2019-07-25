import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KLEXService} from "../../service/klex.service";
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
      private router:Router,
      public klexService:KLEXService,
      private ngFlashMessageService: NgFlashMessageService
  ) { }

  ngOnInit() {


  }

    LogoutUser(){

      this.klexService.logout();
        this.ngFlashMessageService.showFlashMessage({
            // Array of messages each will be displayed in new line
            messages: ["You're Logged Out"],
            // Whether the flash can be dismissed by the user defaults to false
            dismissible: true,
            // Time after which the flash disappears defaults to 2000ms
            timeout: false,
            // Type of flash message, it defaults to info and success, warning, danger types can also be used
            type: 'danger'
        });
      this.router.navigate(['/login']);
      return false;

    }
}
