import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  allPhotos!: any;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe((response) => {
      console.log('Get all photo ', response);
      this.allPhotos = response;
    });
  }
}
