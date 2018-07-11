import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: any;
  username: string;
  
  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    
  }

  onLoginSubmit(){
    const user ={
      username: this.username,
      password: this.password
    }
    let observable = this._authService.authenticateUser(user);
    observable.subscribe(data => {
     if(data['success']){
      this._authService.storeUserData(data['token'], data['user']);
      this._flashMessagesService.show('Successfully logged in!', {cssClass:'alert-success', timeout: 4000});
      this._router.navigate(['/dashboard']);
     }else{
      this._flashMessagesService.show(data['msg'], {cssClass:'alert-danger', timeout: 4000});
      this._router.navigate(['/login']);
     }
    });
  }
}

