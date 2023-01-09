import { Component, OnInit } from "@angular/core";
import { AlbumService } from "src/app/services/album.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-home-album",
  templateUrl: "./home-album.component.html",
  styleUrls: ["./home-album.component.css"],
})
export class HomeAlbumComponent implements OnInit {
  allAlbum!: any;
  constructor(private albumService: AlbumService, private authService: AuthService) {}

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((response) => {
      console.log("Get All album ", response);
      this.allAlbum = response;
    });
  }
}
