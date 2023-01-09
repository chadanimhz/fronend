import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Album } from "src/app/models/album";
import { AlbumService } from "src/app/services/album.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-create-album",
  templateUrl: "./create-album.component.html",
  styleUrls: ["./create-album.component.css"],
})
export class CreateAlbumComponent implements OnInit {
  constructor(private albumService: AlbumService, private auth: AuthService, public router: Router) {}

  ngOnInit(): void {}

  onSave() {
    const name = <HTMLInputElement>document.getElementById("name");
    const profilePhotoUrl = <HTMLInputElement>document.getElementById("profilePhotoUrl");

    var album: Album = {
      id: "",
      name: name.value,
      createdBy: this.auth.getUserId(),
      profilePhotoUrl: profilePhotoUrl.value,
      dateCreated: new Date(),
    };

    this.albumService.saveAlbum(album).subscribe((response) => {
      if (response) {
        console.log("Album Added Successfully!");
        this.router.navigate(["album"]);
      }
    });
  }
}
