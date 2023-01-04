import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  isLoggedIn = false;
  constructor(private afAuth: AngularFireAuth, private authService: AuthService) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn = this.authService.isLoggedIn
      }
    });
  }
  onLogOut() {
    this.authService.signOut();
    this.isLoggedIn = false;
  }

}
