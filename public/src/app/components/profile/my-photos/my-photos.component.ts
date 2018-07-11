import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';
import { HttpService } from '../../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {UsersService} from '../../../services/users.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'


@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent implements OnInit {
  user: any;
  location:any;
  lat: number;
  lng: number;
  check:string;
  show:string;
  // displayPhoto: any;
  id:any;
  user1:any;
  picture: null;
  newUrl: any;
  sendurl:any
  img:any;

  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private _usersService: UsersService,
    private _storage: AngularFireStorage,
    private db: AngularFireDatabase
   ) { }
   private basePath = "/"

  ngOnInit() {
    this.user;
    this.user1;
    // this.displayPhoto;
    this.getUserFromService();
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];
      console.log(this.user)
   
    },
    err =>{
      return false;
    });
   
  }
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
        let observable = this._authService.updatePicture(pictures, this.user1);
        observable.subscribe(data => {
          console.log(data)
          const pict = {url:this.newUrl}
          if(this.user1.ProfilePhoto === null){
            this.makeAvatar(pict);
          }else{
            var picta = [];
            for(var i = 0; i < this.user1.pictures.length; i++){
              picta.push(this.user.pictures[i]._id);
            }
            if(picta.includes(this.user1.ProfilePhoto)){
              this.getUserFromService();
            }else{
              this.makeAvatar(this.user.pictures[this.user.pictures.length-1]);
            }
          }
          
        });

  }
  getUserFromService(){
    this._route.params.subscribe((params : Params)=>{
      this.id = params['id']
      this._usersService.getanUser(this.id).subscribe(data=> {
        this.user1 = data['user'];
        
        // this.display(this.user1);
      });
    })
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
  removeImg(picture){
    
      this.deleteFileStorage(picture.img);
      if(picture.url === this.user1.ProfilePhoto && this.user1.pictures.length< 2){
        let observable = this._usersService.deleteImg(this.user1._id, picture)
        observable.subscribe(data=>{
          this.removeProfilePhoto();
        });
      }else if(picture.url === this.user1.ProfilePhoto){
        let observable = this._usersService.deleteImg(this.user1._id, picture)
        observable.subscribe(data=>{
          this.makeAvatar(this.user1.pictures[this.user1.pictures.length-1]);
          this.getUserFromService();
        });
      }else{
        let observable = this._usersService.deleteImg(this.user1._id, picture)
        observable.subscribe(data=>{
          this.getUserFromService();
        })
      }
  }
  makeAvatar(picture){
    let observable = this._usersService.makeProfilePicture(picture, this.user1._id);
    observable.subscribe(data =>{
      this.getUserFromService();
    })
  }
  removeProfilePhoto(){
    let observable = this._usersService.deletProfilePhoto(this.user1)
    observable.subscribe(data =>{
      this.getUserFromService();
    });
  }
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
  

}
