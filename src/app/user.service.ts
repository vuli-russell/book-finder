import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public authUser$ = new BehaviorSubject(null);

  constructor(private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged(user => {
      this.authUser$.next(user);
    })
  }

  logIn() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut(){
    this.auth.signOut()
  }
}
