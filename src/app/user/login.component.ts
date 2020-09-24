import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    userName: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
        console.log(formValues)
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(["/events"]);
    }

    cancel(){
        this.router.navigate(["/events"]);
    }

}