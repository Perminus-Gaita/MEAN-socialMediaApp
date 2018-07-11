import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:any;
authToken:any;
headers:any;
  constructor(
    private _httpClient: HttpClient) { }
  
    registerUser(user){
     
      return this._httpClient.post('/api/register', user);
    }
    authenticateUser(user){
      return this._httpClient.post('/api/authenticate', user);
    }
   
    storeUserData(token, user){
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
      this.authToken = token;
    }
    logOut(){
      localStorage.clear();
      this.user = null;
      this.authToken = null;
      return true;
    }
    updatePicture(pictures, user){
      console.log(pictures);
      return this._httpClient.post('/api/'+user._id+ '/picture', pictures)
    }
    getProfile(){
      this.loadToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.authToken
        })
      };
      return this._httpClient.get('/api/profile', httpOptions);
    }
    loadToken(){
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    }
    loggedIn() {
      return !!localStorage.getItem('id_token');
    }
    updateUser(user){
      // console.log(user);
      return this._httpClient.post('/api/'+user._id+ '/update', user);
    }
    addPicture(user, url){
      // console.log(url);
      return this._httpClient.put('/api/'+user._id+ '/image', url);
    }
    search(find){

      return this._httpClient.get('/api/search/'+find);
    }
    confirmEmail(id){
      return this._httpClient.put('/api/user/'+id+'/confirmEmail', true);
    }
}