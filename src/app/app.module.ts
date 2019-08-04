import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthorizeService } from './common/services/authorize.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthorizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
