import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumComponent } from './components/my-album/my-album.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'album',
    component: MyAlbumComponent
  },
  {
    path: 'album/create',
    component: CreateAlbumComponent
  },
  {
    path: 'album/:albumId',
    component: AlbumDetailsComponent
  },
  {
    path: 'upload/:albumId',
    component: UploadPictureComponent
  },
  {
    path: 'photo/:photoId',
    component: PhotoDetailsComponent
  },
  {
    path: '',
    component: MyAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
