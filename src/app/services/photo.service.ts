import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getAllPhotos(){
    var headers=this.getHeaders();
    return this.http.get(`${environment.API_URL}photo`,{headers});
  }

  getHeaders(){
    var user = JSON.parse(localStorage.getItem('user')!);
    // debugger;
    var headers={
      'idToken':user.stsTokenManager.accessToken
    }
    return headers;
  }

}
