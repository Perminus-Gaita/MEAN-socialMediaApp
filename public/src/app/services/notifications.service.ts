import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private _httpClient: HttpClient) { }

  allNotifications(id){
    
    return this._httpClient.get('/api/user/'+id+'/notifications')
  }
  allunseenNotifications(id){
    
    return this._httpClient.get('/api/user/'+id+'/unseen/notifications')
  }
  updateNotifications(id){
    
    return this._httpClient.put('/api/user/'+id+'/notifications/seen', id)
  }
}
