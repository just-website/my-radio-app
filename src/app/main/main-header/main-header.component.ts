import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { AuthorizeService } from 'src/app/common/services/authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainHeaderComponent implements OnInit {

  private userName: string;
  private isAuthorize: boolean;
  constructor(
    private authorize: AuthorizeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.setUserName();
    this.isAuthorize = this.authorize.isAuthorize();
    console.log(this.isAuthorize);
  }

  logout() {
    this.authorize.logout();
    this.router.navigate(['/login'])
  }

  setUserName() {
    if (this.authorize.isAuthorize) {
      try {
        this.userName = this.authorize.getUserName();
      } catch (err) {
        console.log(err.message);
        this.userName = 'Не авторизован';
      }
    }
  }
}
