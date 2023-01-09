import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumComponent } from './components/my-album/my-album.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from  '@angular/common/http';
import { HomeAlbumComponent } from './components/home-album/home-album.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAlbumComponent,
    ProfileComponent,
    CreateAlbumComponent,
    AlbumDetailsComponent,
    UploadPictureComponent,
    PhotoDetailsComponent,
    HomeAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
