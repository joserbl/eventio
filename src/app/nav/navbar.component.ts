import {Component} from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    li > a.active {color: #f97928;}
    `]
})

export class NavBarComponent {
    constructor(private authService: AuthService) {

    }

}
