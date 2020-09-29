import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [
        `
        em{float:right; color:#e05c65; padding-left:10px}
        `
    ]
})
export class LoginComponent {

    userName: string;
    password: string;

    mouseoverLogin: boolean;

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
        console.log(formValues)
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(["/events"]);
    }

    cancel() {
        this.router.navigate(["/events"]);
    }

}