import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlService } from './url.service';

const url = 'http://localhost:4000/users'

@Injectable()
export class UserService extends UrlService {
    private user: User;
    constructor(
        public http: HttpClient,
    ) {
        super(http);
    }

    getUserByEmail(email): Observable<User> {
        return this.get(`users?email=${email}`).pipe(
            map(users => {
                if (users[0]) {
                    return users[0]
                } else {
                    throw new Error('Пользователь с таким email не найден')
                }
            })
        );
    }

    addUser(user: User): Observable<any> {
        return this.post('users', user)
    }

}
