import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizeService {
    private authoraze: boolean = false;

    login(user: User) {
        window.localStorage.setItem('user', JSON.stringify(user));
        this.authoraze = true;
    }

    logout() {
        this.authoraze = false;
        window.localStorage.clear();
    }

    isAuthorize(): boolean {
        return this.authoraze;
    }
}