import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';
import {UsersService} from '../../../services/users.service';
import { HttpService } from '../../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {LocationService} from '../../../services/location.service';
import {SharesService } from '../../../services/shares.service'


@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  id:any;
  user:any;
  shares: any;
  selectedImg:any;
  profileShow:any={};
  userax:any;
  user1:any;
  infoDisp:any={};
  content:any;
  displayrepliesOfShare:any;
  sharex:any;
  reply:any;
  message:any;
  displayCommentbox:any={};
  myFollowers:any;
  myFollowings:any;
  wholeLikes:any;
  numb:number;
  shares1:any;

  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private _locationService: LocationService,
    private _usersService: UsersService,
    private _shareService: SharesService) { }
    

  ngOnInit() {
    this._route.params.subscribe((params : Params)=>{
      this.id = params['id']
      let tempObservable2 = this._usersService.getanUser(this.id);
      tempObservable2.subscribe(data=> {
        
        this.user = data['user'];
        
        this.shares = data['shares'];

        this._authService.getProfile().subscribe(profile =>{
          this.user1 = profile['user'];
          console.log(this.user1);
         
        },
        err =>{
          return false;
        });
        setInterval(() => { 
          let tempObservable2 = this._usersService.getanUser(this.id);
          tempObservable2.subscribe(data=> {
            
            this.user = data['user'];
            
            this.shares1 = data['shares'];
            this.numb = this.shares1.length - this.shares.length;
          });
        }, 5000);
      
        setInterval(() => { 
          this.numb; 
        }, 5000);
       
      });
    });
  
  
 
    this.infoDisp;
    this.content;
    this.selectedImg;
    this.profileShow;
    this.userax;
    this.displayrepliesOfShare ;
    this.myFollowers;
    this.myFollowings;
    this.wholeLikes;
  
    // this.getUserLocation();
    // this.show;
    // console.log(this.show);
    // this.check;
  }

  // Data-Time------

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

// DISPLAY MEANING OF ACTION BOX ===============
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
  // IMG BOX=============================
  imgToShow(share){
    this.selectedImg = share;
  }
  selectedImgNull(){
    this.selectedImg = null;
  }

// USER ==================================
  getUser(num){
    let tempObservable2 = this._usersService.getanUser(num);
    tempObservable2.subscribe(data=> {
      
      this.user = data['user'];
      this.shares = data['shares'];
     this.numb = 0;
    });
   
  }
 




// ============LIKE==============

  onclickLike(share){
    let counter = 0;
    for(var i = 0; i< share.likes.length; i++){
      if(share.likes[i]._id=== this.user1._id){
        counter = counter+1;
      }else{
        continue;
      }
    }
      if(counter > 0){
        
        let observable = this._shareService.dislikeFromService(share, this.user1);
        observable.subscribe(data=>{
        this.getUser(this.id);
      })
      }else{
        let observable = this._shareService.likeFromService(share, this.user1);
        observable.subscribe(data=>{
          this.getUser(this.id);
        });
      }
  }


  // Liking reply ==

  onclickLikeReply(share, reply){
    let counter = 0;
    for(var i = 0; i< reply.likes.length; i++){
      if(reply.likes[i]._id=== this.user1._id){
        counter = counter+1;
      }else{
        continue;
      }
    }
    if(counter > 0){
    
      let observable = this._shareService.dislikeReply(this.user1, reply);
      observable.subscribe(data =>{
        this.getUser(this.id);
        this.bringOneShare(share._id);
      })
    }
    else{
      
    let observable = this._shareService.likeReply(this.user1, reply);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this.bringOneShare(share._id);
    })
  }
  }

// =============REPLIES===================

deleteReply(share, reply){

  let observable = this._shareService.deleteReply(this.user1, reply);
  observable.subscribe(data =>{
   
    this.bringOneShare(share._id);
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
let observable = this._shareService.replytheShare(share, reply1, this.user1)
  observable.subscribe(data => {
      this.reply = '';
     
      this.hideAddComment(share);
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
  let observable = this._shareService.replytheShare(share, reply1, this.user1)
    observable.subscribe(data => {
        this.reply = '';
        this.bringOneShare(share._id);
  })

}

}



  // Opening Reply box-form

  showaddComment(share){
    Object.keys(this.displayCommentbox).forEach(h => {
      this.displayCommentbox[h] = false;
    });
    this.displayCommentbox[share._id] = true
  }

  // hiding comment box-form

  hideAddComment(share){
    this.displayCommentbox[share._id] =  false;
  
    this.getUser(this.id);
    
  }

       // after clicking on the share

       displayReplies(share){
   
        this.displayrepliesOfShare= share;
      }
      // closing single share
  
      removeReplyBox(){
        this.displayrepliesOfShare = null;
     
        this.getUser(this.id);
  
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




    // Displaying who likes----------------------


    displayWhoLikes(share){
      this.wholeLikes = share;
    }
  
    removeLikesBox(){
      this.wholeLikes = null; 
    }
  
  // FOLLOW 
//   //  =====================================================
  onclickletsUnfollow(follower){
    let observable = this._usersService.serviceUnFollow(this.user1, follower);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    })
    this.displayFollowers(this.user);
  }
  onclickletsFollow(follower){
 
    let observable = this._usersService.serviceFollow(this.user1, follower);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    })
    this.displayFollowers(this.user);
  }
    //  =====================================================
  onclickletsUnfollow2(follower){
    let observable = this._usersService.serviceUnFollow(this.user1, follower);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    })
    this.displayFollowings(this.user);
  }

  onclickletsFollow2(follower){
 
    let observable = this._usersService.serviceFollow(this.user1, follower);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    })
    this.displayFollowings(this.user);
  }

  //  =====================================================
  onclickletsUnfollow3(){
    let observable = this._usersService.serviceUnFollow(this.user1, this.user);
    observable.subscribe(data =>{
      
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];
        let tempObservable2 = this._usersService.getanUser(this.id);
      tempObservable2.subscribe(data=> {
        
        this.user = data['user'];
        
        this.shares = data['shares'];
      });
    });
    })
   
  }

  onclickletsFollow3(){
 
    let observable = this._usersService.serviceFollow(this.user1, this.user);
    observable.subscribe(data =>{
      
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];
        let tempObservable2 = this._usersService.getanUser(this.id);
      tempObservable2.subscribe(data=> {
        
        this.user = data['user'];
        
        this.shares = data['shares'];})
      });
    })
   
  }

// ========================
  onclickletsUnfollow1(follower, share){
   
    let observable = this._usersService.serviceUnFollow(this.user1, follower);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    });
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.wholeLikes = sharez;});
  }
  onclickletsFollow1(follower, share){
    
    let observable = this._usersService.serviceFollow(this.user1, follower);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    })
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.wholeLikes = sharez;});
    
  }
  // ========================
  onclickletsUnfollow4( share){
   
    let observable = this._usersService.serviceUnFollow(this.user1, this.user);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    });
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.displayrepliesOfShare = sharez;});
  }
  onclickletsFollow4( share){
    
    let observable = this._usersService.serviceFollow(this.user1, this.user);
    observable.subscribe(data =>{
      this.getUser(this.id);
      this._authService.getProfile().subscribe(profile =>{
        this.user1 = profile['user'];});
    })
    let observable1 = this._shareService.aShare(share._id)
    observable1.subscribe(data => {
     const sharez = data;
     this.displayrepliesOfShare = sharez;});
    
  }
}