import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Album } from "../models/album";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  public getAllAlbums() {
    var headers = this.getHeaders();
    return this.http.get(`${environment.API_URL}album`, { headers });
  }

  public getMyAlbum(userId: string) {
    return this.http.get(`${environment.API_URL}album/getmyAlbum/${userId}`);
  }

  public saveAlbum(album: Album) {
    return this.http.post(`${environment.API_URL}album`, album);
  }

  private getHeaders() {
    var user = JSON.parse(localStorage.getItem("user")!);
    var headers = {
      idToken: user.stsTokenManager.accessToken,
    };
    return headers;
  }
}
