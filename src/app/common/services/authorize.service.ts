import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizeService {
    private authoraze: boolean = !!(window.localStorage.getItem('user'));

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

    getUserName() {
        const data = window.localStorage.getItem('user')
        if (data) {
            return JSON.parse(data).name || JSON.parse(data).email;
        } else throw new Error('Нет сохранённого пользователя');
    }
}