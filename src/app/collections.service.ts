import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase";
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  userId: string|null;

  constructor(private afs: AngularFirestore, private userService: UserService) {
    this.userService.authUser$.subscribe(authUser => {
      if(authUser){
        this.user$ = this.afs.doc(`users/${authUser.uid}`).valueChanges()
        this.userId = authUser.uid;
      }else{
        this.user$ = this.afs.doc(`users/null`).valueChanges();
        this.userId = null;
      }
    })
  }

  user$: Observable<any> = this.afs.doc(`users/${this.userId}`).valueChanges();

  addBookToFavorite(book){
    if(this.userId){
      this.afs.doc(`users/${this.userId}`).set({books: firebase.firestore.FieldValue.arrayUnion({...book,isFav: true})},{merge:true}) 
    }
  }
  
  deleteBookFromFavorites(book){
    if(this.userId){
      this.afs.doc(`users/${this.userId}`).set({books: firebase.firestore.FieldValue.arrayRemove(book)},{merge:true}) 
    }
  }
  
}
