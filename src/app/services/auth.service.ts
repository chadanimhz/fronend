import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
import { User } from "../models/user";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData: any;
  defaultProfilePhoto: string = "https://picsum.photos/536/354";

  // user: Observable<firebase.User>;
  // userIdToken: string;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private http: HttpClient
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user")!);
      } else {
        localStorage.setItem("user", "null");
        JSON.parse(localStorage.getItem("user")!);
      }
    });
  }

  // storeIdToken(idToken : Promise<string>){
  //   idToken.then(
  //     idTokenValue => {
  //       this.userIdToken=idTokenValue;
  //       console.log("Id Token Value:",idTokenValue)
  //     }
  //   );
  // }

  signInUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.setUserData(result.user);
      this.router.navigate(["profile"]);
    });
  }

  signUpUser(email: string, password: string, name: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value: any) => {
        this.registerUser(email, name, value.user!.multiFactor.user.accessToken);
        console.log("Success signup!", value);
      })
      .catch((err) => {
        console.log("Something went wrong:", err.message);
      });
  }

  registerUser(email: string, name: string, accessToken: string) {
    var user: User = {
      id: "",
      email: email,
      name: name,
      profilePhotoUrl: this.defaultProfilePhoto,
    };
    this.http.post(`${environment.API_URL}users?idToken=${accessToken}`, user).subscribe((response) => {
      console.log("Success registration!");
      this.router.navigate(["login"]);
    });
  }

  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user")!);
    return user !== null ? true : false;
  }

  public getUserId() {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      return user.uid;
    }
    return null;
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["login"]);
    });
  }

  private setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      id: user.uid,
      email: user.email,
      name: user.displayName,
      profilePhotoUrl: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
