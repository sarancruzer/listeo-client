import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginComponent } from './component/login/login.component';
import { LoadScriptsService } from './_service/load-scripts.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FullLayoutComponent } from './component/_containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './component/_containers/simple-layout/simple-layout.component';

import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent
} from './component/_shared';
import { LandingComponent } from './component/landing/landing.component';
import { AddListingComponent } from './component/add-listing/add-listing.component';


const APP_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    PageNotFoundComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    SidebarComponent,
    LandingComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ LoadScriptsService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
