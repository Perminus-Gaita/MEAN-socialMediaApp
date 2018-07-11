import { Component, OnInit } from '@angular/core';
import { SharesService } from '../../services/shares.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private _shareService: SharesService,
    private _usersService: UsersService,) { }
  numb:number;
  shares1;
  shares:any;
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

  checkShares:boolean = false;
  countNewshares:any;

  users2:any;

  ngOnInit() {
    this.getAllShares();
    this.picture;
    this.message= "Write something interesting"
    this.newUrl;
    this.comment = '';
    

    this.selectedImg;
    this.img;
    this.profileShow;
    this.userax;
    this.content;
    this.infoDisp;
    this.reply;
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

    setInterval(() => { 
      this.getAllShares1(); 
    }, 5000);
  
    setInterval(() => { 
      this.numb; 
    }, 5000);
  }


    // bring all shares
    getAllShares(){
      this.numb = 0;
        let observable = this._shareService.bestShares()
        observable.subscribe(data => {
         this.shares = data;
         
        
        //  this.sortArray(this.users);
      });
      
   
    }
    getAllShares1(){
   
     
        let observable = this._shareService.bestShares()
        observable.subscribe(data => {
         this.shares1 = data;
         this.numb = this.shares1.length - this.shares.length;
        
        //  this.sortArray(this.users);
      });
      
   
    }

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

// Show image after clicking on 

imgToShow(share){
  this.selectedImg = share;
}
selectedImgNull(){
  this.selectedImg = null;
}
  

     // after clicking on the share

     displayReplies(share){
       console.log(share);
      let observable = this._shareService.aShare(share._id)
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
    // closing single share

    removeReplyBox(){
      this.displayrepliesOfShare = null;
      this.getAllShares();
      
    }


    displayWhoLikes(share){
      this.wholeLikes = share;
    }
  
    removeLikesBox(){
      this.wholeLikes = null; 
    }
    
}
