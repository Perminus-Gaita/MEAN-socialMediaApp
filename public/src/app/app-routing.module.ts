import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {GuardService} from './guards/guard.service';
import {CanActivate, Router } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { NotificationsComponent } from './components/profile/notifications/notifications.component';

import { UpdateComponent } from './components/profile/edit-profile/update/update.component';
import { PasswordComponent } from './components/profile/edit-profile/password/password.component';
import { UsersProfileComponent } from './components/profile/users-profile/users-profile.component';
import { MyPhotosComponent } from './components/profile/my-photos/my-photos.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import{DiscoverComponent} from './components/discover/discover.component';



const routes: Routes = [
      { path: '',component: HomeComponent, canActivate:[GuardService]},
      {path: 'user/:id/emailconfirmation',component:ConfirmComponent},
      { path: 'discover',component: DiscoverComponent, canActivate:[GuardService]},
      { path: 'register',component:RegisterComponent, canActivate:[GuardService]},
      { path: 'profile',component: ProfileComponent, canActivate:[AuthGuard], children:[
        { path: 'edit/:id',component:EditProfileComponent, canActivate:[AuthGuard], children:[
          {path: 'password', component:PasswordComponent,canActivate:[AuthGuard]},
          { path: '',component:UpdateComponent, canActivate:[AuthGuard]}
        ]},
        { path: '',component:ShowProfileComponent, canActivate:[AuthGuard]},
        { path: ':id',component:UsersProfileComponent, runGuardsAndResolvers: 'always',},
        { path: ':id/myphotos',component:MyPhotosComponent, canActivate:[AuthGuard]},
        { path: ':id/notifications',component:NotificationsComponent, canActivate:[AuthGuard]}
      ], runGuardsAndResolvers: 'always'},
      
      { path: 'login',component: LoginComponent, canActivate:[GuardService]},
      { path: 'dashboard',component: DashboardComponent, canActivate:[AuthGuard], runGuardsAndResolvers: 'always', },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }