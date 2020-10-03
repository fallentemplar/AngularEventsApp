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
    loginInvalid = false;
    mouseoverLogin: boolean;

    constructor(private authService: AuthService, private router: Router) {

    }
    // hardcoded user: johnpapa pass: any password works
    login(formValues): void {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(response => {
            if (response) {
                this.router.navigate(['/events']);
            }
            else {
                this.loginInvalid = true;
            }
        });

    }

    cancel(): void {
        this.router.navigate(['/events']);
    }

}
