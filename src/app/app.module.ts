import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CarsModule} from "./cars/cars.module";
import {CarsService} from "./cars/cars.service";
import {CoreModule} from "./core-module/core.module";
import {CarsListComponent} from "./cars/cars-list/cars-list.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CarsRoutingModule} from "./cars/cars-routing.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import {LoginModule} from "./login/login.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {LayoutService} from "./shared-module/services/layout.service";
import {AuthCanLoadGuard} from "./auth/auth-can-load.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [CarsService, AuthService, AuthGuard, AuthCanLoadGuard, LayoutService],
  bootstrap: [AppComponent]
})

export class AppModule {}
