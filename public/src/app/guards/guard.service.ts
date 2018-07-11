import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private _router: Router,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService) { }

    canActivate(): boolean{
      if(this._authService.loggedIn()){
          this._router.navigate(['/dashboard']); 
          return false;
      }else{
        return true;
      }
  }
}
