import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    userName: string;
    password: string;
    login(formValues) {
        console.log(formValues)
    }

}