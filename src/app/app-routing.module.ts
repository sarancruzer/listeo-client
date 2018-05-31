import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SimpleLayoutComponent, FullLayoutComponent } from './component/_containers';
import { SignupComponent } from './component/signup/signup.component';
import { LandingComponent } from './component/landing/landing.component';
import { AddListingComponent } from './component/add-listing/add-listing.component';
import { MyListingComponent } from './component/my-listing/my-listing.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import { MessagesComponent } from './component/messages/messages.component';
import { BookmarksComponent } from './component/bookmarks/bookmarks.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ListingListComponent } from './component/listing-list/listing-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path: '', component: SimpleLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'listingList', component: ListingListComponent },
    ]
  },
  {path: '', component: FullLayoutComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'addListing', component: AddListingComponent},
    {path: 'myListing', component: MyListingComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'bookmarks', component: BookmarksComponent},
    {path: 'profile', component: ProfileComponent},


  ]},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
