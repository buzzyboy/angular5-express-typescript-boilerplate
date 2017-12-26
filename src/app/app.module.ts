import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {AppBootstrapModule} from "./app-bootstrap/app-bootstrap.module";
import {FormsModule} from "@angular/forms";
import {ToastModule} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from './views/about/about.component';
import { ApitestComponent } from './views/apitest/apitest.component';
import {ExampleService} from "./services/Example.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ApitestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    AppBootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    ExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
