import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
profileForm: FormGroup;

  ngOnInit() {
    let firstName = new FormControl();
    let lastName = new FormControl();
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });

  }
}
