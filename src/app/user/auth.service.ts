import {Injectable} from '@angular/core';
import {IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    loginUser(userName: string, password: string) {
// Mock current user (will be correctly implemented soon)
        this.currentUser = {
            id: 1,
            firstName: 'string',
            lastName: 'LastName',
            userName: 'papabless'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
    }




