import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable.d';
import {AuthService} from "./../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.authService.isLoggedIn()) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
  }
}
