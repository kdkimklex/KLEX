import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { KLEXService } from './klex.service';


@Injectable()
export class KLEXGuardService implements CanActivate {

    constructor(public auth: KLEXService, public router: Router) {}

    canActivate(): boolean {
        if (!this.auth.LoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}