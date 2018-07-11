import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../../../services/notifications.service';
import {AuthService} from '../../../services/auth.service';
import {UsersService} from '../../../services/users.service';
import {SharesService} from '../../../services/shares.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications:any;
  user:any;
  numb:number=0;
  userax:any;
  profileShow:any={};
  displayrepliesOfShare:any;
  wholeLikes:any;
  sharex:any;
  infoDisp:any={};
  content:any;
  reply:any;
  message:any;

  constructor( 
    private _notificationService: NotificationsService,
    private _authService: AuthService,
    private _usersService: UsersService,
    private _shareService: SharesService,
    private db: AngularFireDatabase,
    private _storage: AngularFireStorage,
  ) { }
  private basePath = "/"
  ngOnInit() {
   
    this._authService.getProfile().subscribe(profile =>{
      this.user = profile['user'];
      
      this.updateMyNots();
      this.getMyNots();
      this.userax;
      this.profileShow;
      this.displayrepliesOfShare;
      this.wholeLikes;
      this.content;
      this.infoDisp;
      this.message= "Write something interesting";
      this.reply;

      
    },
    err =>{
      return false;
    });
    setInterval(() => { 
      this.getMyNots1(); 
    }, 5000);
  
    setInterval(() => { 
      this.numb; 
      console.log(this.numb);
    }, 5000);
  }
  getMyNots(){
    let observable1 = this._notificationService.allNotifications(this.user._id);
    observable1.subscribe(data => {
     this.notifications = data['notifications'];
     console.log(this.notifications);
     this.numb = 0;
  });
  }
  getMyNots1(){
    let observable1 = this._notificationService.allunseenNotifications(this.user._id);
    observable1.subscribe(data => {
      const newNots = data['notifications'];
      this.numb = newNots.length;
  });
  }
  updateMyNots(){
    let observable = this._notificationService.updateNotifications(this.user._id)
    observable.subscribe(data => {
      this.getMyNots();
  });
  }
  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  mouseEnter(notification){
    let observable = this._usersService.getanUser(notification.executer._id)
    observable.subscribe(data => {
     this.userax = data['user'];
    
     
    //  this.sortArray(this.users);
    });
    Object.keys(this.profileShow).forEach(h => {
      this.profileShow[h] = false;
    });
    this.profileShow[notification._id] = true
  }
  
  mouseLeave(){
    Object.keys(this.profileShow).forEach(h => {
      this.profileShow[h] = false;
    });
  }

  onFollow2(notification){
   
    let observable = this._usersService.serviceFollow(this.user, notification.executer);
    observable.subscribe(data =>{
      this.getMyNots();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }
  onUnFollow2(notification){
   
    let observable = this._usersService.serviceUnFollow(this.user, notification.executer);
    observable.subscribe(data =>{
      this.getMyNots();
      this._authService.getProfile().subscribe(profile =>{
        this.user = profile['user'];});
    })
  }


  // display box
  removeReplyBox(){
    this.displayrepliesOfShare = null;
    this.getMyNots();
  }

  displayReplies(share){
    let observable = this._shareService.aShare(share)
    observable.subscribe(data => {
     this.sharex = data;
     this.displayrepliesOfShare = this.sharex;
    });
  }

  bringOneShare(id){
    let observable = this._shareService.aShare(id)
    observable.subscribe(data => {
     this.sharex = data;
     this.displayrepliesOfShare = this.sharex;
    });
  }



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

 // Like from display Window

 onclickLike1(share){
  let counter = 0;
  for(var i = 0; i< share.likes.length; i++){
    if(share.likes[i]._id === this.user._id){
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



displayWhoLikes(share){
  this.wholeLikes = share;
}

removeLikesBox(){
  this.wholeLikes = null; 
}

// Delete share
deleteShare1(share){
  if(share.img){
    this.deleteFileStorage(share.img);
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
      this.getMyNots();
     this.removeReplyBox();
  
      
    })
  }else{
    let observable = this._shareService.deleteShare(this.user._id, share)
    observable.subscribe(data=>{
      this.getMyNots();
      this.removeReplyBox();

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


  // Reply-----------------------------------------------------


  deleteReply(share, reply){

    let observable = this._shareService.deleteReply(this.user, reply);
    observable.subscribe(data =>{
      this.bringOneShare(share._id);
      this.getMyNots();
    })
  }



// Follow unfollow from display who likes

  onclickletsUnfollow1(follower, share){
   
    let observable = this._usersService.serviceUnFollow(this.user, follower);
    observable.subscribe(data =>{
      this.bringOneShare(share._id)
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
      this.bringOneShare(share._id)
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
