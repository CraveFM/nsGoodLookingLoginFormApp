import { Injectable } from '@angular/core';
import { UserService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";
import * as Kinvey from "kinvey-nativescript-sdk";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private kinveyUserService: KinveyUserService) { }

  register(user: User) {
    return this.kinveyUserService.signup({ username: user.email, password: user.password })
        .catch(this.handleErrors);
  }

  login(user: User) {
      return this.kinveyUserService.login(user.email, user.password)
          .catch(this.handleErrors);
  }

  logout() {
      return this.kinveyUserService.logout()
          .catch(this.handleErrors);
  }

  resetPassword(email) {
      return this.kinveyUserService.resetPassword(email)
          .catch(this.handleErrors);
  }

  handleErrors(error: Kinvey.Errors.BaseError) {
      console.error(error.message);
      return Promise.reject(error.message);
  }

}
