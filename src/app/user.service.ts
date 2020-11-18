import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AngularFireAuth) {}

  logIn() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut(){
    this.auth.signOut()
  }

  watchUser(fn: (value:firebase.User|null) => void){
    this.auth.onAuthStateChanged(user => {
      if(user){
        fn(user)
      }else{
        fn(null)
      }
    })
  }
}
