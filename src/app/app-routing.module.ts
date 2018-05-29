import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SimpleLayoutComponent, FullLayoutComponent } from './component/_containers';
import { SignupComponent } from './component/signup/signup.component';
import { LandingComponent } from './component/landing/landing.component';
import { AddListingComponent } from './component/add-listing/add-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path: '', component: SimpleLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'landing', component: LandingComponent },
    ]
  },
  {path: '', component: FullLayoutComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'addListing', component: AddListingComponent},


  ]},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
