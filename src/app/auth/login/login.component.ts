import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowHideAnimation } from 'src/app/animations';
import { UserService } from '../../common/services/user.service';
import { User } from 'src/app/common/models/user.model';
import { Message } from 'src/app/common/models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ShowHideAnimation('hideAnimation')]
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private userData: User;
  private message: Message = new Message('', '');
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        updateOn: 'blur'
      })
    })
  }

  formSubmit() {
    this.checkAuthorize();
  }

  private checkAuthorize() {
    this.userService.getUserByEmail(this.loginForm.value.email).subscribe(data => {
      if (!data) {
        this.showMessage('Ошибка', 'Пользователь не найден');
        return;
      }
      this.userData = data;
      if (this.loginForm.controls['password'].value !== data.password) {
        this.showMessage('Ошибка', 'Пароль введён не верно')
      } else {
        console.log('Успешная авторизация');

      }
    })
  }


  private showMessage(type, message) {
    console.log('test ', type, message);

    this.message = new Message(type, message);
    const timer = window.setTimeout(() => {
      this.message = new Message('', '');
      window.clearTimeout(timer);
    }, 3000)
  }
}

