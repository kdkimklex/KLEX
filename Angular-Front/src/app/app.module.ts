import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { KLEXService } from './service/klex.service';
import { ProfileComponent } from './components/profile/profile.component';
import { KLEXGuardService  } from './service/klex.guard';
import { ProjectComponent } from './components/project/project.component';
import { GroupComponent } from './components/group/group.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';



const applicationRoutes:Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent,canActivate: [KLEXGuardService]},
    {path:'project',component:ProjectComponent},
    {path:'group',component:GroupComponent},
    {path:'myprojects',component:MyprojectsComponent},
    {path:'task',component:TaskComponent},
    {path:'home',component:HomeComponent},




];
let jwtHelper: JwtHelperService;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProjectComponent,
    GroupComponent,
    MyprojectsComponent,
    TaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(applicationRoutes),
      NgFlashMessagesModule.forRoot(),
      JwtModule.forRoot({
          config: {
              tokenGetter: function () {
                  return '';
              }
          }
      })


  ],
  providers: [KLEXService,JwtHelperService,KLEXGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
