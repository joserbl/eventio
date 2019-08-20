import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
profileForm: FormGroup;

constructor(private authService: AuthService, private router: Router) {

}

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let firstName = new FormControl(this.authService.currentUser.firstName);
    // tslint:disable-next-line:prefer-const
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      // tslint:disable-next-line:object-literal-shorthand
      firstName: firstName,
      // tslint:disable-next-line:object-literal-shorthand
      lastName: lastName
    });

  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile(firstName: string, lastName: string) {
    this.authService.updateCurrentUser(firstName, lastName);
  }
}
