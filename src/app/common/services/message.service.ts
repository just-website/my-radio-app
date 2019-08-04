import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';


@Injectable()
export class MessageService {
    public data: Message = new Message('', '');

    showMessage(type, message) {
        if (this.data.type !== '') {
            return;
        }
        this.data = new Message(type, message);
        const timer = window.setTimeout(() => {
            this.data = new Message('', '');
            window.clearTimeout(timer);
        }, 3000)
    }
}