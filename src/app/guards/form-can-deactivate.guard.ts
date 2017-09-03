import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable.d';
import {AuthService} from "./../auth/auth.service";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class FormCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component : CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
