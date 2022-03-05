import {Injectable} from '@angular/core';
import {getAuth, signInWithPopup, GoogleAuthProvider, Auth} from "@angular/fire/auth";
import {BehaviorSubject, Observable, of} from "rxjs";
import {authState} from "rxfire/auth";
import {filter, switchMap} from "rxjs/operators";
import {User} from "../../interfaces/user";
import {collection, doc, docData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user$: Observable<User>|undefined;

  constructor(private firestore:Firestore, private auth:Auth) {
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



}
