import {Component} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    templateUrl: './login.component.html'
})

export class LogInComponent {
username;
password;

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
       console.log(formValues);
       this.authService.loginUser(formValues.username, formValues.password);
       this.router.navigate(['events']);
        }

    cancel() {
        this.router.navigate(['events']);
    }

}

