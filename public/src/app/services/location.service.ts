import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _httpClient: HttpClient) { }

  updateUserLocation(user){
    return this._httpClient.put('http://localhost:8000/api/'+user._id+ '/location', user);
  }

}
