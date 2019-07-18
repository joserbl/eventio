import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LogInComponent } from './login.component';


@NgModule({
    declarations: [
        ProfileComponent,
        LogInComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class UserModule { }
