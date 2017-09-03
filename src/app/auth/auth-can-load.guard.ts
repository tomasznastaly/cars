import { Injectable } from '@angular/core';
import { Route, CanLoad, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable.d';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthCanLoadGuard implements CanLoad {
  constructor(private authService : AuthService, private router : Router) {}

  canLoad(route : Route): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
