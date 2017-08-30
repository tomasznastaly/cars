import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {CarDetailsComponent} from "./car-details/car-details.component";
import {CarResolve} from "./car-resolve.service";
import {AuthGuard} from "../auth/auth.guard";

const CARS_ROUTES : Route[] = [
  {
    path: 'cars/:id',
    component: <any>CarDetailsComponent,
    resolve: { car: CarResolve },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class CarsRoutingModule {}
