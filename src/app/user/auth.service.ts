import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: HttpClient) { }

    loginUser(userName: string, password: string) {
        const loginInfo = { username: userName, password: password };
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
                console.log(this.currentUser);
            }))
            .pipe(catchError(err => { return of(false) }));
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName
    }
}