import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../../../services/validate.service';
import {AuthService} from '../../../../services/auth.service';

import {LocationService} from '../../../../services/location.service';
import { HttpService } from '../../../../http.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { FlashMessagesService } from 'angular2-flash-messages';
import * as firebase from 'firebase';
import { UsersService } from '../../../../services/users.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  user: any;
  message:any;
  first_name: string;
  last_name: string;
  email: string;
  error: any;
  fronterr =[];
  password: any;
  confirm_password:any;
  username: string;
  errors: any;
  picture: null;
  newUrl: any;
  sendurl:any
  info:any;
  location:any;
  lat: number;
  lng: number;
  check:string;
  show:string;
  img:any;
  displayPhoto: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _locationService: LocationService,
    private _flashMessagesService: FlashMessagesService,
    private _storage: AngularFireStorage,
    private _usersService: UsersService
    
   ) { 
     this.sendurl = {image:""}
   }
   private basePath = "/"

  ngOnInit() {
  
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];
      console.log(this.user);
      // this.display(this.user);
    },
    err =>{
      return false;
    });
    
   
    // this.getUserLocation();
    // this.show;
    // console.log(this.show);
    // this.check;
  }
  // display(user){
  //   if(user.pictures.length ===0){
  //     return this.displayPhoto = "https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994"
  //   }else{
  //     if(!user.ProfilePhoto){
  //       return this.displayPhoto = user.pictures[user.pictures.length-1].url;
  //     }else{
  //       for(var i = 0; i< user.pictures.length; i++){
  //         if(user.ProfilePhoto === user.pictures[i]._id){
  //           return this.displayPhoto = user.pictures[i].url;
  //         }else{
  //           return this.displayPhoto = user.pictures[user.pictures.length-1].url;
  //         }
  //       }
  //     }
  //   }
  // }
  // getUserLocation(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(position =>{
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
       
  //     });
  //     this.location = ''+this.lat+' '+this.lng;
  //     this.user.location = this.location;
  //     console.log(this.location);
  //     let observable = this._locationService.updateUserLocation(this.user);
  //     observable.subscribe(data => {
  //       if(data['success']){
  //         this._flashMessagesService.show("success!", {cssClass:'alert-success', timeout: 4000});
  //         this._router.navigate(['/profile']);
  //       }
  //     });

  //   }
  // }
  // locationchange(){
  //   if(!this.user.allowed){
  //     this.user.allowed = 'on';
  //     this.show = 'enable';
  //     this.check = 'off';
  //     navigator.geolocation.getCurrentPosition(position =>{
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //     });
  //     this.location = ''+this.lat+' '+this.lng;
  //     this.user.location = this.location;
  //     let observable = this._locationService.updateUserLocation(this.user);
  //     observable.subscribe(data => {
  //       if(data['success']){
     
  //         this._router.navigate(['/profile']);
  //       }
  //     });
  //   }else if(this.user.allowed === 'on'){
  //     this.user.allowed = 'off';
  //     this.show = 'disable';
  //     this.check = 'on';
  //     let observable = this._locationService.updateUserLocation(this.user);
  //     observable.subscribe(data => {
  //       if(data['success']){
          
  //         this._router.navigate(['/profile']);
  //       }
  //     });
  //   }else{
  //     this.show = 'enable';
  //     this.check = 'off';
  //     this.user.allowed = 'on';
  //     navigator.geolocation.getCurrentPosition(position =>{
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //     });
  //     this.location = ''+this.lat+' '+this.lng;
  //     this.user.location = this.location;
  //     let observable = this._locationService.updateUserLocation(this.user);
  //     observable.subscribe(data => {
  //       if(data['success']){
        
  //         this._router.navigate(['/profile']);
  //       }
  //     });
  //   }
  // }
  onFileSelected(event){
    this.picture = event.target.files[0];
    let file = this.picture;
        
    let name = "Profile picture"+ Date.now();
    var uploadpic = this._storage.upload(name, file)
    .then((data) =>{
      data.ref.getDownloadURL().then((url)=>{
        this.newUrl = url;
        
        this.img= name;
       
      })
    })
  }
  onload(){
        const pictures = {
          url: this.newUrl,
          img: this.img
        }
        let observable = this._authService.updatePicture(pictures, this.user);
        observable.subscribe(data => {
          console.log(data);
        
            const pict={
              url:this.newUrl
            }
            this.makeAvatar(pict);
            
         
        });

  }
  makeAvatar(picture){
    let observable = this._usersService.makeProfilePicture(picture, this.user._id);
    observable.subscribe(data =>{
      this._router.navigate(['/profile']);
    })
  }
  reset(){
    window.location.reload();
  }
  
  onUpdateSubmit(){
   
    if(!this.password === this.user.password){
      this._flashMessagesService.show("incorrect password!!", {cssClass:'alert-danger', timeout: 4000});
    }else{
      if(!this._validateService.validateRegister(this.user)){
        this._flashMessagesService.show("please fill in all fields", {cssClass:'alert-danger', timeout: 4000});
        return false;
      }
      if(!this._validateService.validateEmail(this.user.email)){
        this._flashMessagesService.show("Please use a valid email", {cssClass:'alert-danger', timeout: 4000});
        return false;
      }
      if(!this._validateService.matchPassword(this.password, this.confirm_password)){
        this._flashMessagesService.show("Password doesn't match", {cssClass:'alert-danger', timeout: 4000});
        return false;
        }else{
        let observable = this._authService.updateUser(this.user);
        observable.subscribe(data => {
          if(data['success']){
            this._flashMessagesService.show("success!", {cssClass:'alert-success', timeout: 4000});
            this._router.navigate(['/profile']);
            
          }else{
            this._flashMessagesService.show(data['msg'], {cssClass:'alert-danger', timeout: 4000});
            this._router.navigate(['/profile']);
          }
      })
      }
   
  }
}
private deleteFileStorage(name: string) {
  const storageRef = firebase.storage().ref();
  storageRef.child(`${this.basePath}/${name}`).delete();
}

}