import { Component, OnInit } from "@angular/core";
import { AlbumService } from "src/app/services/album.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-my-album",
  templateUrl: "./my-album.component.html",
  styleUrls: ["./my-album.component.css"],
})
export class MyAlbumComponent implements OnInit {
  allMyAlbum!: any;
  constructor(private albumService: AlbumService, private authService: AuthService) {}

  ngOnInit(): void {
    this.albumService.getMyAlbum(this.authService.getUserId()).subscribe((response) => {
      console.log("Get My album ", response);
      this.allMyAlbum = response;
    });
  }
}
