import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
message:any;
first_name: string;
last_name: string;
email: string;
error: any;
fronterr =[];
password: any;
password_confirmation:any;
username: string;
errors: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }



  
  onRegisterSubmit(){
      const user ={
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        username: this.username,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
    if(!this._validateService.validateRegister(user)){
      this._flashMessagesService.show("please fill in all fields", {cssClass:'alert-danger', timeout: 4000});
      return false;
    }
    if(!this._validateService.validateEmail(user.email)){
      this._flashMessagesService.show("Please use a valid email", {cssClass:'alert-danger', timeout: 4000});
      return false;
    }
    if(!this._validateService.matchPassword(this.password, this.password_confirmation)){
      this._flashMessagesService.show("Password doesn't match", {cssClass:'alert-danger', timeout: 4000});
      return false;
    }
    let observable = this._authService.registerUser(user);
    
    observable.subscribe(data => {
      if(data['succes']){
        this._flashMessagesService.show("successfully registered, check your inbox and confirm your e-mail !", {cssClass:'alert-success', timeout: 10000});
        this._router.navigate(['/']);
        
      }else{
        this._flashMessagesService.show(data['msg'], {cssClass:'alert-danger', timeout: 4000});
        this._router.navigate(['/register']);
      }
    });
   
  }
  loginSubmit(user){
   
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