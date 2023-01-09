import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"],
})
export class AlbumDetailsComponent implements OnInit {
  albumId!: string;
  constructor(private activetedRoute: ActivatedRoute) {
    activetedRoute.params.subscribe((data: any) => {
      if (data.albumId) {
        this.albumId = data.albumId;
      }
    });
  }

  ngOnInit(): void {}
}
