import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../../../services/validate.service';
import {AuthService} from '../../../../services/auth.service';
import { HttpService } from '../../../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  user: any;
  password: any;
  newPassword: any;
  confirm_password:any;
  confirm_newPassword: any;
  username: string;
  errors: any;
  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];
      
    },
    err =>{
      return false;
    });
  }
  onUpdatePassword(){
    console.log(this.user)
    if(!this.password === this.user.password){
      this._flashMessagesService.show("incorrect password!!", {cssClass:'alert-danger', timeout: 4000});
    }else{
      const body ={
        _id: this.user._id,
        password: this.password,
        newPassword: this.newPassword
      }
      if(!this._validateService.validatePasswordchange(body, this.confirm_password, this.confirm_newPassword)){
        this._flashMessagesService.show("please fill in all fields", {cssClass:'alert-danger', timeout: 4000});
        return false;
      }
      if(!this._validateService.matchPassword(body.password, this.confirm_password)){
        this._flashMessagesService.show("Password don't match", {cssClass:'alert-danger', timeout: 4000});
        return false;
      }
      if(!this._validateService.matchPassword(body.newPassword, this.confirm_newPassword)){
        this._flashMessagesService.show("New Passwords don't match", {cssClass:'alert-danger', timeout: 4000});
        return false;
      }
      let observable = this._authService.updateUser(body);
      
      observable.subscribe(data => {
        if(data['success']){
          this._flashMessagesService.show("success!", {cssClass:'alert-success', timeout: 4000});
          this._router.navigate(['/profile']);
          
        }else{
          this._flashMessagesService.show(data['msg'], {cssClass:'alert-danger', timeout: 4000});
          
        }
    })
  }
}

}