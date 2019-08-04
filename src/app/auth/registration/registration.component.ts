import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ShowHideAnimation } from 'src/app/common/animations';
import { UserService } from '../../common/services/user.service';
import { User } from 'src/app/common/models/user.model';
import { MessageService } from 'src/app/common/services/message.service';
import { Subscription, Observable } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ShowHideAnimation('hideAnimation')]
})

export class RegistrationComponent implements OnInit, OnDestroy {
  private registForm: FormGroup;
  private passwordValueSubscr: Subscription;
  private commonPasswordValue: string;

  constructor(
    private userService: UserService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.registForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email], [this.asyncMailValidator.bind(this)]),
      'password': new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],

        updateOn: 'blur'
      }),
      'passwordConfirm': new FormControl('', {
        validators: [
          this.passwordValidator.bind(this)
        ],
        asyncValidators: [

        ],
        updateOn: 'blur'
      })
    });
    this.subscribeToPasswordChange();
  }

  ngOnDestroy() {
    if (this.passwordValueSubscr) {
      this.passwordValueSubscr.unsubscribe();
    }
  }

  formSubmit() {
    const { password, email } = this.registForm.value;
    const user = new User(password, email);
    this.userService.addUser(user)
      .subscribe(response => {
        this.message.showMessage('Успех', `Вы успешно зарегистрировали ${response.email}`)
      });
  }

  private subscribeToPasswordChange() {
    this.passwordValueSubscr = this.registForm.get('password').valueChanges
      .subscribe(
        value => this.commonPasswordValue = value
      )
  }

  private passwordValidator(control: FormControl): Validators {
    if (this.commonPasswordValue !== control.value) {
      return { 'confirmPassword': true }
    } else return null;
  }

  private asyncMailValidator(control: FormControl): Promise<any> {
    console.log('1');

    return new Promise((resolve, reject) => {
      console.log('2');

      this.userService.getUserByEmail(control.value)
        .subscribe(
          succes => {
            console.log(succes);

            resolve(
              { 'uniqEmail': true }
            )
          },
          error => {
            console.log(error);

            resolve(null)
          }
        )
    })
  }
}
