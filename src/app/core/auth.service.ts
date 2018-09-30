import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {

    baseUrl: 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    attemptAuth(username: string, password: string): Observable<any> {
        const credentials = { username: username, password: password};
        console.log('attemptAuth ::')
        return this.http.post(`http://localhost:8080/token/generate-token`, credentials)
    }
}