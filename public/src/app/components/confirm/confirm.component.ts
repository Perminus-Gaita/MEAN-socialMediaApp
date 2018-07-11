import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {ActivatedRoute, Params, Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private _router: Router,
    private _route: ActivatedRoute, 
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService) { this.aTag = null;}
    id;
    user:any;
    message:any;
    aTag:boolean;
  ngOnInit() {
    this._route.params.subscribe((params : Params)=>{
      this.id = params['id']
      let tempObservable2 = this._authService.confirmEmail(this.id);
      tempObservable2.subscribe(data=> {
       
        if(data['succes']===true){
          this.aTag = true;
        }
        
        this.message = data['msg'];
        console.log(this.aTag)
       
      });
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
