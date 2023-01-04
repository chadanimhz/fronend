import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onLoginClick() {
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');
    this.authService.signInUser(email.value, password.value).then(re => {
      console.log("RETURN")
    }).catch(error => {
      alert(error.message)
    })
  }
  onSignUp() {

  }
}
