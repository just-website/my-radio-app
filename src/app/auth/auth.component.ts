import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { AuthAnimation } from '../animations';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        AuthAnimation('routeAnimations'),
    ]
})
export class AuthComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.router.navigate(['/login']);
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
