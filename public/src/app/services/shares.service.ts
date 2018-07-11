import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharesService {

  constructor(private _httpClient: HttpClient) { }

  addShare(shares, user){
  
    return this._httpClient.post('/api/'+user._id+'/share', shares);
  }
  allShares(){
    return this._httpClient.get('/api/shares');
  }
  bestShares(){
    return this._httpClient.get('/api/bestshares');
  }

  followingShares(user){
   
    return this._httpClient.get('/api/user/'+user._id+'/dashshares');
  }

  deleteShare(user_id, share){
    return this._httpClient.delete('/api/'+user_id+'/shares/'+share._id)
  }
  myShares(user){
    return this._httpClient.get('/api/user/'+user._id+'/myshares');
  }
  likeFromService(share, user1){
    return this._httpClient.post('/api/shares/'+share._id+'/like', user1);
  }
  dislikeFromService(share, user){
    // console.log(user._id)
    return this._httpClient.delete('/api/'+user._id+'/shares/'+share._id+'/dislike');
  }
  replytheShare(share, reply1, user){
   
    return this._httpClient.post('/api/shares/'+share._id+'/user/'+user._id+'/reply', reply1);
  }
  allReplies(){
    return this._httpClient.get('/api/allreplies')
  }
  aShare(id){
    return this._httpClient.get('/api/share/'+id)
  }
  likeReply(user, reply){
    
    return this._httpClient.put('/api/user/'+user._id+'/reply/'+reply._id+'/like', user)
  }
  dislikeReply(user, reply){
    
    return this._httpClient.put('/api/user/'+user._id+'/reply/'+reply._id+'/dislike', user)
  }
  deleteReply(user, reply){
  
    return this._httpClient.delete('/api/'+user._id+'/reply/'+reply._id+'/remove');
  }
  myReplies(user){
    return this._httpClient.get('/api/'+user._id+'/myreplies')
  }
  aReply(id){
    return this._httpClient.get('/api/reply/'+id)
  }
}
