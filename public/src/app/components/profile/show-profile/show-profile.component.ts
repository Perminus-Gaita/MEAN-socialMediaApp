import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';
import { HttpService } from '../../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {LocationService} from '../../../services/location.service';
import { SharesService } from '../../../services/shares.service';
import { UsersService } from '../../../services/users.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  user: any;
  location:any;
  lat: number;
  lng: number;
  check:string;
  show:string;

  shares:any;
  selectedImg:any;
 
  userax:any;


  picture:null;
  newUrl: any;
  comment:any;
  message:any;
  users:any;

  showSpinner: boolean = true;
  displayCommentbox:any={};
  profileShow:any={};
 


  infoDisp:any={};
  content:any;

  reply: any;
  normala:string= 'normal';


  loading:boolean=null;
  displayrepliesOfShare:any;
  sharex:any;
  wholeLikes:any;
  myshares:any;


  myFollowers:any;
  myFollowings:any;
  my_shares: boolean;
  my_replies:any;
  myReplies:boolean =null;

  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private _locationService: LocationService, 
    private _shareService: SharesService,
    private _usersService: UsersService,
    private _storage: AngularFireStorage,
    private db: AngularFireDatabase) { }
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
      
      this.getMyShares();
      this.bringMyReplies();
    },
    err =>{
      return false;
    });
    this.selectedImg;
 
    this.userax;
    
   



    
    this.selectedImg;

  
    this.userax;
    this.content;
    this.infoDisp;


    this.profileShow;
  

    this.displayrepliesOfShare;
    this.wholeLikes;


    this.myFollowers;
    this.myFollowings;
    this.my_replies;
    
    
  
    // this.getUserLocation();
    // this.show;
    // console.log(this.show);
    // this.check;
  }


// Display my Replies
  displayMyReplies(){
    this.myReplies = true;

  }
  removemyrepliesBox(){
    this.myReplies = null;
  }
// Data-Time------

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }


  imgToShow(share){
    this.selectedImg = share;
  }
  selectedImgNull(){
    this.selectedImg = null;
  }
 
  getMyShares(){
    let observable1 = this._usersService.getanUser(this.user._id);
    observable1.subscribe(data => {
     this.shares = data['shares'];
     
     
  });
  }
  
     // after clicking on the share

     displayReplies(share){
   
      this.displayrepliesOfShare= share;
    }
    // closing single share

    removeReplyBox(){
      this.displayrepliesOfShare = null;
   
      this.getMyShares();
      this.bringMyReplies();

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



// DELETE A Share
 // Delete Sahare

 deleteShare(share){
   
  if(share.img){
  this.deleteFileStorage(share.img);
  let observable = this._shareService.deleteShare(this.user._id, share)
  observable.subscribe(data=>{
   
    this.getMyShares();
    this.bringMyReplies();
  })
}else{
  let observable = this._shareService.deleteShare(this.user._id, share)
  observable.subscribe(data=>{

  
 
    this.getMyShares();
    this.bringMyReplies();
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
      this.getMyShares();
      this.bringMyReplies();
     
    })
  }else{
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
      this.removeReplyBox();
      this.getMyShares();
      this.bringMyReplies();
  
    })
  }
}

    // REPLY -----

    deleteReply(share, reply){

      let observable = this._shareService.deleteReply(this.user, reply);
      observable.subscribe(data =>{
        this.getMyShares();
        this.bringOneShare(share._id);
        this.bringMyReplies();
      })
    }



    deleteReply10(reply){

      let observable = this._shareService.deleteReply(this.user, reply);
      observable.subscribe(data =>{
        this.getMyShares();
        this.bringMyReplies();
      })
    }

    // Bring one share 
    bringOneShare(id){
      let observable = this._shareService.aShare(id)
      observable.subscribe(data => {
       this.sharex = data;
       this.displayrepliesOfShare = this.sharex;
       
      
    });
    }
// ADDING a Reply
  
onreplySubmit(share){
  if(!this.reply){
    this.message = 'You can do better!';
  }else{

    const reply1 ={
      content: this.reply}
    let observable = this._shareService.replytheShare(share, reply1, this.user)
      observable.subscribe(data => {
          this.reply = '';
          this.getMyShares();
          this.hideAddComment(share);
          this.bringMyReplies();
    })
  
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
            this.bringMyReplies();
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
  
    this.getMyShares();
    this.bringMyReplies();
    
  }
 
// FOLLOW 

  onclickletsUnfollow(follower){
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getMyShares();
      this.bringMyReplies();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowers(this.user);
  }
  onclickletsFollow(follower){
 
    let observable = this._usersService.serviceFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getMyShares();
      this.bringMyReplies();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowers(this.user);
  }
  onclickletsUnfollow2(follower){
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getMyShares();
      this.bringMyReplies();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowings(this.user);
  }

  onclickletsFollow2(follower){
 
    let observable = this._usersService.serviceFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getMyShares();
      this.bringMyReplies();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    this.displayFollowings(this.user);
  }

  onclickletsUnfollow1(follower, share){
   
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.getMyShares();
      this.bringMyReplies();
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
      this.getMyShares();
      this.bringMyReplies();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.wholeLikes = sharez;});
    
  }

// Dashboard Plays

  getShares(decleration){
    if(decleration === 'my_dashboard'){
     
     
      this.my_shares = false;
      
    }else if(decleration === '_bests'){
      
     
      this.my_shares = false;
     
    }else if(decleration === 'my_shares'){
     
      this.my_shares = true;
      let observable1 = this._shareService.myShares(this.user);
      observable1.subscribe(data => {
        this.shares = data['shares'];
      
     
    });
    }
  }


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
        this.getMyShares();
        this.bringOneShare(share._id);
        this.bringMyReplies();
      })
    }
    else{
      
    let observable = this._shareService.likeReply(this.user, reply);
    observable.subscribe(data =>{
      this.getMyShares();
      this.bringOneShare(share._id);
      this.bringMyReplies();
    })
  }
  }
  onclickLikeReply10(reply){
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
        this.getMyShares();
       
        this.bringMyReplies();
      })
    }
    else{
      
    let observable = this._shareService.likeReply(this.user, reply);
    observable.subscribe(data =>{
      this.getMyShares();
    
      this.bringMyReplies();
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
            this. getMyShares();
            this.bringMyReplies();
            
        })
        }else{
          let observable = this._shareService.likeFromService(share, this.user);
          observable.subscribe(data=>{
            this. getMyShares();
            this.bringMyReplies();
           
          });
        }
    }



    // REPLY

        //  all replies- only for testing
        bringAllReplies(){
          let observable = this._shareService.allReplies();
          observable.subscribe(data=>{
         
      
          })
        }
        bringMyReplies(){
          let observable = this._shareService.myReplies(this.user);
          observable.subscribe(data=>{
            this.my_replies = data;
            console.log(this.my_replies);
            
      
          })
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

  

  // removing picture from firebase
  private deleteFileStorage(name) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }

}