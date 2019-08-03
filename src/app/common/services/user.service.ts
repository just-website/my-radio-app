import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const url = 'http://localhost:4000/users'

@Injectable()
export class UserService {
    private user: User;
    constructor(
        private http: HttpClient,
    ) { }

    getUserByEmail<Data>(email): Observable<User> {
        return this.http.get<User>(`${url}?email=${email}`).pipe(
            map(users => {
                if (users) {
                    return users[0]
                } else {
                    return undefined
                }
            })
        );
    }
}
