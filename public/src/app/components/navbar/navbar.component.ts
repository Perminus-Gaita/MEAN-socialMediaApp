import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {UsersService } from '../../services/users.service';
import {SharesService } from '../../services/shares.service';
import {NotificationsService } from '../../services/notifications.service';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchbar:boolean=false;
  search:any;
  result:boolean=false;
  users:any;
  shares:any;
  user:any;
  profileShow:any={};
  userax:any;
  infoDisp:any={};
  content:any;
  displayCommentbox:any={};
  comment:any;
  message:any;
  reply:any;
  displayrepliesOfShare:any;
  sharex:any;
  wholeLikes:any;
  wholeLikes1 :any;
  numb:number=0;
  notifications:any;
  notifications1:any;
  formDisplay:boolean=false;
  newUrl1:any;
  newUrl:any;
  loading:boolean=null;
  imageClass:any;
  picture:null;
  img:any;
  normala:string= 'normal';
  uploadpic:any;
  
  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private _usersService: UsersService,
    private _shareService: SharesService,
    private _storage: AngularFireStorage,
    private _notificationService: NotificationsService) {
      
     }
     private basePath = "/"

  ngOnInit() {
   this.searchbar;
   this.search;
   this.result;
   this.users;
   this.shares;
   this.profileShow;
   this.userax;
   this.content;
   this.infoDisp;
   this.comment = '';
   this.reply;
   this.displayrepliesOfShare;
   this.wholeLikes;
   this.wholeLikes1;
   this.picture;
   this.img;
   this.normala;

   this._authService.getProfile().subscribe(profile =>{
    this.user = profile['user'];
    this.numb;
    this.formDisplay;
    this.newUrl;
    this.newUrl1;
    setInterval(() => { 
      this.getMyNots1(); 
    }, 5000);
  
    setInterval(() => { 
      this.numb; 
      console.log(this.numb);
    }, 5000);
    
  },
  err =>{
    return false;
  });
  
  


}


removeNewURl(img){
  this.deleteFileStorage(img)
  this.img = null;
  this.newUrl = null;
  this.newUrl1 = null;
  this.picture = null;

}
removeNewURl1(img){
 this.deleteFileStorage(img)
 this.img = null;
 this.newUrl1 = null;
 this.newUrl = null;
 this.picture = null;

}

  // filter stuffs
  changeClass(imgClass){
    this.normala = imgClass;
    
  }
  addClass(classnrm){
    this.imageClass = classnrm;
    this.newUrl1 = this.newUrl;
    this.img = this.img;
    this.newUrl = null;
    this.normala = null;
    this.picture = null;
  }

  // uploading a picture

  onFileSelected(event){
    this.picture = event.target.files[0];
  }

      // Load a picture
 
      onload(){
        let file = this.picture
        this.loading = true;
        let name = "Share picture"+this.user._id+ Date.now();
         this.uploadpic = this._storage.upload(name, file)
        .then((data) =>{
          var progress = (data.bytesTransferred / data.totalBytes) * 100;
          if(progress === 100){
            this.loading = null;
          }
          data.ref.getDownloadURL().then((url)=>{
            this.newUrl = url;
            this.img=name;
          });
        });
    
      }
    
    //  add a share
    
      onshareSubmit(){
        if(!this.comment){
          this.message = 'You can do better!';
        }else{
        if(this.newUrl1){
          const shares ={urla: this.newUrl1,
                        comment: this.comment,
                        img: this.img,
                        imageclass: this.imageClass }
          let observable = this._shareService.addShare(shares, this.user)
            observable.subscribe(data => {
                this.comment = '';
                this.newUrl1 = null;
               this.formDisplay = null;
          });
        }else{
          const shares ={
            comment: this.comment}
          let observable = this._shareService.addShare(shares, this.user)
            observable.subscribe(data => {
                this.comment = '';
                this.formDisplay = null;
             
          })
        }
      }
    }

  // notfs

getMyNots1(){
  let observable1 = this._notificationService.allunseenNotifications(this.user._id);
  observable1.subscribe(data => {
    const newNots = data['notifications'];
    this.numb = newNots.length;
});
}

  // SECTION 1 =========================
  onLogout(){
    this._authService.logOut();
    this._flashMessagesService.show('Logged out!', {cssClass:'alert-danger', timeout: 4000});
    return false;
  }
 searchBar(){
   if(this.searchbar === false){
    this.searchbar=true;
    
   }else if(this.searchbar ===true){
    this.searchbar= false;
   
   }
  
 }

 postFromNav(){
 
  this.formDisplay = true;
  console.log(this.formDisplay)
 }
 removeformBox(){
   if(this.img){
    this.deleteFileStorage(this.img)
    this.img = null;
    this.newUrl1 = null;
    this.newUrl = null;
    this.picture = null;
    this.formDisplay = false;
   }else{
    this.formDisplay = false;
   }
  
 }
 onsubmitSearch(){
   const find =this.search;
   
   let observabele = this._authService.search(find);
   observabele.subscribe(data =>{
     this.users= data['users'];
     
     this.shares = data['shares']
   })
   this.searchbar = false;
   this.result = true;
 }
 removeresultsBox(){
   this.result = false;
 }
 onclickletsUnfollow2(follower){
  let observable = this._usersService.serviceUnFollow(this.user, follower);
  observable.subscribe(data =>{
    this.onsubmitSearch();
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];});
  })

}

onclickletsFollow2(follower){

  let observable = this._usersService.serviceFollow(this.user, follower);
  observable.subscribe(data =>{
    this.onsubmitSearch();
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];});
  })
}
// SECTION 2 ====================


// Data-Time------

stringAsDate(dateStr: string) {
  return new Date(dateStr);
}
  // Showing profile box



  mouseEnter(share){
    let observable = this._usersService.getanUser(share.user_id)
    observable.subscribe(data => {
     this.userax = data['user'];
    
     
    //  this.sortArray(this.users);
    });
    Object.keys(this.profileShow).forEach(h => {
      this.profileShow[h] = false;
    });
    this.profileShow[share._id] = true
  }
  
  mouseLeave(){
    Object.keys(this.profileShow).forEach(h => {
      this.profileShow[h] = false;
    });
  }

  bringOneShare(id){
    let observable = this._shareService.aShare(id)
    observable.subscribe(data => {
     this.sharex = data;
     this.displayrepliesOfShare = this.sharex;
     
    
  });
  }
  // FOLLOW====================


  onclickFollow1(share){
    let observable = this._usersService.serviceFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.bringOneShare(share._id);
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }
  onclickUnFollow1(share){
    let observable = this._usersService.serviceUnFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.bringOneShare(share._id);
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }

  onFollow2(share){
   
    let observable = this._usersService.serviceFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.onsubmitSearch();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }
  onUnFollow2(share){
   
    let observable = this._usersService.serviceUnFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.onsubmitSearch();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }
  // SECTION 3


  //  Display of like delete comment box

displayMeaning(info, share){
  this.content = ''+info+'!';
  Object.keys(this.infoDisp).forEach(h => {
    this.infoDisp[h] = false;
  });
  this.infoDisp[share._id] = true
}
displayMea(){
  Object.keys(this.infoDisp).forEach(h => {
    this.infoDisp[h] = false;
  });
}


    //  Like from Dashboard

    onclickLike(share){
      let counter = 0;
      for(var i = 0; i< share.likes.length; i++){
        if(share.likes[i]._id=== this.user._id){
          counter = counter+1;
        }else{
          continue;
        }
      }
        if(counter > 0){
          
          let observable = this._shareService.dislikeFromService(share, this.user);
          observable.subscribe(data=>{
            this.onsubmitSearch();
          this._authService.getProfile().subscribe(profile =>{
          this.user = profile['user'];});
          });
        }else{
          let observable = this._shareService.likeFromService(share, this.user);
          observable.subscribe(data=>{
            this.onsubmitSearch();
          this._authService.getProfile().subscribe(profile =>{
          this.user = profile['user'];});
          });
        }
    }

// Section 4==========


  // Opening Comment box-form

  showaddComment(share){
    Object.keys(this.displayCommentbox).forEach(h => {
      this.displayCommentbox[h] = false;
    });
    this.displayCommentbox[share._id] = true
  }

  // hiding comment box-form

  hideAddComment(share){
    this.displayCommentbox[share._id] =  false;
    this.onsubmitSearch();
    this._authService.getProfile().subscribe(profile =>{
    this.user = profile['user'];});
  }


   // Delete a Share

   deleteShare(share){
    if(share.img){
    this.deleteFileStorage(share.img);
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
     
      this.onsubmitSearch();
      this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];});
    })
  }else{
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
  
      this.onsubmitSearch();
      this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];});
    })
  }
  }


      // replying a share

      onreplySubmit(share){
        if(!this.reply){
          this.message = 'You can do better!';
        }else{
     
          const reply1 ={
            content: this.reply}
          let observable = this._shareService.replytheShare(share, reply1, this.user)
            observable.subscribe(data => {
                this.reply = '';
                this.onsubmitSearch();
                this._authService.getProfile().subscribe(profile =>{
                  this.user = profile['user'];});
          })
        
      }
    
      }

          // after clicking on the share

    displayReplies(share){
   
      this.displayrepliesOfShare= share;
    }
    // closing single share

    removeReplyBox(){
      this.displayrepliesOfShare = null;
      this.onsubmitSearch();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    }



  // Section 4 ===========
  displayWhoLikes(share){
    this.wholeLikes = share;
  }

  removeLikesBox(){
    this.wholeLikes = null; 
  }

    // Section 4 ===========
    displayWhoLikes1(reply){
      this._shareService.aReply(reply._id).subscribe(data=>{
        this.wholeLikes1 = data['reply'];
       
      })
    }
  
    removeLikesBox1(){
      this.wholeLikes1 = null; 
    }
    // Like from display Window

    onclickLike1(share){
      let counter = 0;
      for(var i = 0; i< share.likes.length; i++){
        if(share.likes[i]._id=== this.user._id){
          counter = counter+1;
        }else{
          continue;
        }
      }
        if(counter > 0){
          
          let observable = this._shareService.dislikeFromService(share, this.user);
          observable.subscribe(data=>{
            this.bringOneShare(share._id)
        })
        }else{
          let observable = this._shareService.likeFromService(share, this.user);
          observable.subscribe(data=>{
            this.bringOneShare(share._id)
          });
        }
    }

// Deleting Share while share-display open

  deleteShare1(share){
    if(share.img){
      this.deleteFileStorage(share.img);
      let observable = this._shareService.deleteShare(this.user._id, share)
      observable.subscribe(data=>{
       this.removeReplyBox();
       this.onsubmitSearch();
       this._authService.getProfile().subscribe(profile =>{
         this.user = profile['user'];});
      })
    }else{
      let observable = this._shareService.deleteShare(this.user._id, share)
      observable.subscribe(data=>{
        this.removeReplyBox();
        this.onsubmitSearch();
        this._authService.getProfile().subscribe(profile =>{
          this.user = profile['user'];});
        });
    }
  }

      // replying from open share box

      onreplySubmit1(share){
        if(!this.reply){
          this.message = 'You can do better!';
        }else{
     
          const reply1 ={
            content: this.reply}
          let observable = this._shareService.replytheShare(share, reply1, this.user)
            observable.subscribe(data => {
                this.reply = '';
                this.bringOneShare(share._id);
          })
        
      }
  
      }


  // Liking reply ==

  onclickLikeReply(share, reply){
    let counter = 0;
    for(var i = 0; i< reply.likes.length; i++){
      if(reply.likes[i]._id=== this.user._id){
        counter = counter+1;
      }else{
        continue;
      }
    }
    if(counter > 0){
    
      let observable = this._shareService.dislikeReply(this.user, reply);
      observable.subscribe(data =>{
       
        this.bringOneShare(share._id);
      })
    }
    else{
      
    let observable = this._shareService.likeReply(this.user, reply);
    observable.subscribe(data =>{
     
      this.bringOneShare(share._id);
    })
  }
  }





  deleteReply(share, reply){

    let observable = this._shareService.deleteReply(this.user, reply);
    observable.subscribe(data =>{
      
      this.bringOneShare(share._id);
    })
  }

  onclickletsUnfollow1(follower, share){
   
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    });
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.wholeLikes = sharez;});
  }
  onclickletsFollow1(follower, share){
    
    let observable = this._usersService.serviceFollow(this.user, follower);
    observable.subscribe(data =>{
     
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.wholeLikes = sharez;});
    
  }

    // removing picture from firebase
    private deleteFileStorage(name: string) {
      const storageRef = firebase.storage().ref();
      storageRef.child(`${this.basePath}/${name}`).delete();
    }
  }


// 
