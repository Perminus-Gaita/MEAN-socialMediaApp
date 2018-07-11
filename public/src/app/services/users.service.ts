import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient) { }
  
  allUsers(){
     return this._httpClient.get('/api');
  }
  allunfollowedUsers(user){
    return this._httpClient.get('/api/'+user._id+'/users');
 }
  getanUser(id){
    return this._httpClient.get('/api/user/'+id);
  }
  makeProfilePicture(picture, id){
    
    return this._httpClient.put('/api/user/'+id+'/avatar', picture);
  }
  deleteImg(id, picture){
    return this._httpClient.delete('/api/user/'+id+'/image/'+picture._id);
  }
  deletProfilePhoto(user1){
    return this._httpClient.delete('/api/user/'+user1._id+'/remove/profilephoto');
  }
  serviceFollow(user, followingUser){
    
    return this._httpClient.put('/api/user/'+user._id+'/follow/'+followingUser._id, followingUser);
  }
  serviceUnFollow(user, followingUser){
    return this._httpClient.put('/api/user/'+user._id+'/Unfollow/'+followingUser._id, followingUser);
  }

}
