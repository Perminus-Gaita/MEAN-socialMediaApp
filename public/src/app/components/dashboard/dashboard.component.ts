import { Component, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';
import { HttpService } from '../../http.service';
import { SharesService } from '../../services/shares.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import {FormsModule} from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// declare var $:any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sendurl: any;
  user:any;
  location:any;
  lat: number;
  lng: number;
  picture:null;
  newUrl: any;
  comment:any;
  message:any;
  users:any;
  shares:any;
  showSpinner: boolean = true;
  uploadpic:any;
  selectedImg: any;
  img:any;
  // displayPhoto: any;
  profileShow:any={};
  userax:any;
  infoDisp:any={};
  content:any;
  displayCommentbox:any={};
  reply: any;
  normala:string= 'normal';
  imageClass:any;
  newUrl1:any;
  loading:boolean=null;
  displayrepliesOfShare:any;
  sharex:any;
  wholeLikes:any;
  myshares:any;
  my_dashboard:boolean;
  _bests:boolean;
  myFollowers:any;
  myFollowings:any;
  my_shares: boolean;
  shares1;
  checkShares:boolean = false;
  countNewshares:any;
  numb:number;
  users2:any;
  

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _locationService: LocationService,
    private _flashMessagesService: FlashMessagesService,
    private _storage: AngularFireStorage,
    private _shareService: SharesService,
    private _httpService: HttpService,
    private _authService: AuthService,
    private _usersService: UsersService,
    private db: AngularFireDatabase
    
    ) { this.sendurl = {image:""}; 
      this.my_dashboard= true;
      this._bests= false;
      this.my_shares = false;}
    private basePath = "/"

    

  ngOnInit() {

    
    this._router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
  };
  
  this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this._router.navigated = false;
          window.scrollTo(0, 0);
      }
  })
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];
      console.log(this.user);
      // console.log(this.user)
      // this.display(this.user);
      this.getMyShares();
      this.getAllShares();
      this.numb
      this.getAllunfollowingUsers();
    },
    
    err =>{
      return false;
    });
    setInterval(() => { 
      this.getAllShares1(); 
    }, 5000);
  
    setInterval(() => { 
      this.numb; 
    }, 5000);
  
    this.picture;
    this.message= "Write something interesting"
    this.newUrl;
    this.comment = '';
    
    this.getAllShares();
    this.selectedImg;
    this.img;
    this.profileShow;
    this.userax;
    this.content;
    this.infoDisp;
    this.reply;
    this.bringAllReplies();
    this.normala;
    this.newUrl1;
    this.loading;
    this.displayrepliesOfShare;
    this.wholeLikes;
    this._bests;
    this.my_dashboard;
    this.myFollowers;
    this.myFollowings;
    this.checkShares;
    this.countNewshares;
    this.users;
    
    



    
    // $('.btn').click(function(){
    //   alert('hi');
    // })
    // this.getUserLocation();
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




// Profile displays ------------------------

displayFollowers(user){
  let observable = this._usersService.getanUser(user._id)
    observable.subscribe(data => {
     this.myFollowers = data['user'];
     
    });
}
removeFollowersBox(){
  this.myFollowers = null;
  this.myFollowings = null;
}



displayFollowings(user){
  let observable = this._usersService.getanUser(user._id)
    observable.subscribe(data => {
     this.myFollowings = data['user'];
     
    });
}

  // bring one user


 

// private deleteFileDatabase(key: string) {
//   return this.db.list(`${this.basePath}/`).remove(key);
// }
  // deleteFileUpload(fileUpload: FileUpload) {
  //   this.deleteFileDatabase(fileUpload.key)
  //     .then(() => {
  //       this.deleteFileStorage(fileUpload.name);
  //     })
  //     .catch(error => console.log(error));
  // }


  // Removing picture 

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

 
// Share------------------------------------------



// Show image after clicking on 

imgToShow(share){
  this.selectedImg = share;
}
selectedImgNull(){
  this.selectedImg = null;
}


// uploading a picture

onFileSelected(event){
  this.picture = event.target.files[0];
}

// Bring all users

getAllunfollowingUsers(){
  let observable = this._usersService.allunfollowedUsers(this.user)
  observable.subscribe(data => {
   this.users2 = data['users'];
   console.log(this.users2);
   
   
});
}
getAllUsers(){
  let observable = this._usersService.allUsers()
  observable.subscribe(data => {
   this.users = data;
   console.log(this.users);
   
   
});
}

// Dashboard choices


getShares(decleration){
  if(decleration === 'my_dashboard'){
    this.my_dashboard = true;
    this._bests = false;
    this.my_shares = false;
    this.getAllShares()
  }else if(decleration === '_bests'){
    this.my_dashboard = false;
    this._bests = true;
    this.my_shares = false;
    this.getAllShares()
  }else if(decleration === 'my_shares'){
    this.my_dashboard = false;
    this._bests = false;
    this.my_shares = true;
    let observable1 = this._shareService.myShares(this.user);
    observable1.subscribe(data => {
      this.shares = data['shares'];
    
   
  });
  }
}

// / my shares
getMyShares(){

  let observable1 = this._shareService.myShares(this.user);
  observable1.subscribe(data => {
    this.myshares = data['shares'];
  
 
});
}
  // bring all shares
  getAllShares(){
    this.numb = 0;
    if(this.my_dashboard === true){
        
        let observable = this._shareService.followingShares(this.user);
        observable.subscribe(data => {
        this.shares = data;
       
        
        //  this.sortArray(this.users);
      })
    }else if(this._bests === true){
      let observable = this._shareService.bestShares()
      observable.subscribe(data => {
       this.shares = data;
       
      
      //  this.sortArray(this.users);
    });
    }
 
  }
  getAllShares1(){
    if(this.my_dashboard === true){
        
        let observable = this._shareService.followingShares(this.user);
        observable.subscribe(data => {
        this.shares1 = data;
        this.numb = this.shares1.length - this.shares.length;
        
        //  this.sortArray(this.users);
      })
    }else if(this._bests === true){
      let observable = this._shareService.bestShares()
      observable.subscribe(data => {
       this.shares1 = data;
       this.numb = this.shares1.length - this.shares.length;
      
      //  this.sortArray(this.users);
    });
    }
    if(this.shares1 - this.shares > 0){
      this.checkShares = true;
      this.countNewshares = this.shares1 - this.shares;
    }
 
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
              this.getAllShares();
              this.getMyShares();
        });
      }else{
        const shares ={
          comment: this.comment}
        let observable = this._shareService.addShare(shares, this.user)
          observable.subscribe(data => {
              this.comment = '';
              this.getAllShares();
              this.getMyShares();
        })
      }
    }
  }
  // Delete a Share

  deleteShare(share){
    if(share.img){
    this.deleteFileStorage(share.img);
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
     
      this.getAllShares();
      this.getAllUsers();
      this.getMyShares();
    })
  }else{
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
  
      this.getAllShares();
      this.getAllUsers();
      this.getMyShares();
    })
  }
  }



// Deleting Share while share-display open

  deleteShare1(share){
    if(share.img){
      this.deleteFileStorage(share.img);
      let observable = this._shareService.deleteShare(this.user._id, share)
      observable.subscribe(data=>{
       this.removeReplyBox();
        this.getAllShares();
        this.getAllUsers();
      })
    }else{
      let observable = this._shareService.deleteShare(this.user._id, share)
      observable.subscribe(data=>{
        this.removeReplyBox();
        this.getAllShares();
        this.getAllUsers();
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
      this.getAllShares();
      this.getMyShares();
      this.getAllUsers();
    }




  // Follow----------------------------
  onclickletsFollowFromHere(userz){
    let observable = this._usersService.serviceFollow(this.user, userz);
    observable.subscribe(data =>{
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }

  onclickFollow1(share){
    let observable = this._usersService.serviceFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.bringOneShare(share._id);
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }
  onclickUnFollow1(share){
    let observable = this._usersService.serviceUnFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.bringOneShare(share._id);
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }

  onFollow2(share){
   
    let observable = this._usersService.serviceFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }
  onUnFollow2(share){
   
    let observable = this._usersService.serviceUnFollow(this.user, share.user);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }

  onclickletsUnfollow(follower){
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowers(this.user);
  }
  onclickletsFollow(follower){
 
    let observable = this._usersService.serviceFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowers(this.user);
  }
  onclickletsUnfollow2(follower){
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowings(this.user);
  }
  onclickletsFollow2(follower){
 
    let observable = this._usersService.serviceFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowings(this.user);
  }

  onclickletsUnfollow1(follower, share){
   
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getAllShares();
      this.getAllunfollowingUsers();
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
      this.getAllShares();
      this.getAllunfollowingUsers();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.wholeLikes = sharez;});
    
  }

  // Reply-----------------------------------------------------


  deleteReply(share, reply){

    let observable = this._shareService.deleteReply(this.user, reply);
    observable.subscribe(data =>{
      this.getAllShares();
      this.bringOneShare(share._id);
    })
  }


  // one share for displayreply

    
  bringOneShare(id){
    let observable = this._shareService.aShare(id)
    observable.subscribe(data => {
     this.sharex = data;
     this.displayrepliesOfShare = this.sharex;
     
    
  });
  }

      //  all replies- only for testing
      bringAllReplies(){
        let observable = this._shareService.allReplies();
        observable.subscribe(data=>{
       
    
        })
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
            this.getAllShares();
            this.hideAddComment(share);
      })
    
  }

  }


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
    this.getAllShares();
    this.getMyShares();
    this.getAllUsers();
  }

// LIKE=========


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
        this.getAllShares();
        this.bringOneShare(share._id);
      })
    }
    else{
      
    let observable = this._shareService.likeReply(this.user, reply);
    observable.subscribe(data =>{
      this.getAllShares();
      this.bringOneShare(share._id);
    })
  }
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
            this. getAllShares();
            this. getAllUsers();
        })
        }else{
          let observable = this._shareService.likeFromService(share, this.user);
          observable.subscribe(data=>{
            this. getAllShares();
            this. getAllUsers();
          });
        }
    }

    // Displaying who likes----------------------


    displayWhoLikes(share){
      this.wholeLikes = share;
    }
  
    removeLikesBox(){
      this.wholeLikes = null; 
    }
  
  
    bringOneShare1(id){
      let observable = this._shareService.aShare(id)
      observable.subscribe(data => {
       const sharez = data;
       this.wholeLikes = sharez;
       
      
      //  this.sortArray(this.users);
    });
    }

// removing picture from firebase
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
 

}
