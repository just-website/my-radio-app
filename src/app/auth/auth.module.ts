import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule]
})

export class AuthModule { }