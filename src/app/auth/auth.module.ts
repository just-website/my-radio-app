import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AppCommonModule } from '../common/common.module';
import { RestoreComponent } from './restore/restore.component';
import { UserService } from '../common/services/user.service';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, AuthComponent, RestoreComponent],
  imports: [CommonModule, AuthRoutingModule, AppCommonModule, HttpClientModule],
  providers: [UserService]
})

export class AuthModule { }