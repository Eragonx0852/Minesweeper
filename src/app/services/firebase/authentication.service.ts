import {Injectable} from '@angular/core';
import {Auth, GoogleAuthProvider, sendSignInLinkToEmail, signInWithPopup, User} from "@angular/fire/auth";
import {Observable, of} from "rxjs";
import {authState} from "rxfire/auth";
import {switchMap} from "rxjs/operators";
//import {User} from "../../interfaces/user";
import {collection, doc, docData, Firestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<User> | undefined;

  constructor(private firestore: Firestore, private auth: Auth, private router: Router) {
    const loggedIn$ = authState(auth).pipe(
      // @ts-ignore
      switchMap(user => {
        // Logged in
        if (user) {
          docData(doc(collection(firestore, 'users'), user.uid)).subscribe((user) => {
            return user as User;
          });
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(this.auth, provider);
    console.log(credentials.user);
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/']);
  }


  passwordLessSignIn() {
    let email = 'robinx0852@gmail.com';
    console.log('Starting passwordless sign-in');
    try {
      const actionCodeSettings = {
        url: this.router.url,
        handleCodeInApp: true,
      };
      sendSignInLinkToEmail(this.auth, email, actionCodeSettings).then(console.log).catch(console.log);
      console.log('Email signin has been sent');
      window.localStorage.setItem('emailForSignIn', email);

    } catch (error) {}
  }
}




























