import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  tab = 1;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onLoginClick() {
    const email = <HTMLInputElement>document.getElementById("email");
    const password = <HTMLInputElement>document.getElementById("password");
    this.authService
      .signInUser(email.value, password.value)
      .then((re) => {
        console.log("RETURN");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  onSignUp() {
    const name = <HTMLInputElement>document.getElementById("name");
    const email = <HTMLInputElement>document.getElementById("eemail");
    const password = <HTMLInputElement>document.getElementById("ppassword");
    this.authService
      .signUpUser(email.value, password.value, name.value)
      .then((re) => {
        alert("User created");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
