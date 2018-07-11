import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {LocationService} from './services/location.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { SharesService } from './services/shares.service';


import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';





import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';
import { NotificationsComponent } from './components/profile/notifications/notifications.component';
import { NavigationComponent } from './components/profile/navigation/navigation.component';
import { UpdateComponent } from './components/profile/edit-profile/update/update.component';
import { PasswordComponent } from './components/profile/edit-profile/password/password.component';
import { UsersProfileComponent } from './components/profile/users-profile/users-profile.component';
import { UsersService } from './services/users.service';

import { MyPhotosComponent } from './components/profile/my-photos/my-photos.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DiscoverComponent } from './components/discover/discover.component';






@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    EditProfileComponent,
    ShowProfileComponent,
    NotificationsComponent,
    NavigationComponent,
    UpdateComponent,
    PasswordComponent,
    UsersProfileComponent,
    
    MyPhotosComponent,
    
    ConfirmComponent,
    
    DiscoverComponent,
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    FlashMessagesModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5yxF7c5kP2bXKORcPbRHHCDIcwHuFERI'
    })
   
  ],
  providers: [AuthGuard, HttpService, ValidateService, AuthService, LocationService, SharesService, UsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }
