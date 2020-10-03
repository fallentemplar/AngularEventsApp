import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

    logout(): Observable<object> {
        this.currentUser = undefined;

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/logout', {}, options)
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object)
                    this.currentUser = <IUser>data;
            }))
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string): Observable<object> {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }
}