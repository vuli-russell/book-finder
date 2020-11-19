import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase";
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {


  //i got something wrong here - subscription deosnt change when book stream changes???
  // booksStream: Observable<any> = this.afs.doc(`users/${this.user}`).valueChanges();

  // constructor(private afs: AngularFirestore) { }

  userId: string|null;

  constructor(private afs: AngularFirestore, private userService: UserService) {
    this.userService.authUser$.subscribe(authUser => {
      if(authUser){
        this.user$ = this.afs.doc(`users/${authUser.uid}`).valueChanges()
        this.userId = authUser.uid;
      }else{
        this.user$ = this.afs.doc(`users/null`).valueChanges();
        this.userId = authUser.uid
      }
    })
  }

  user$: Observable<any> = this.afs.doc(`users/${this.userId}`).valueChanges();

  addBookToFavorite(book){
    delete book.isFav
    if(this.userId){
      this.afs.doc(`users/${this.userId}`).set({books: firebase.firestore.FieldValue.arrayUnion(book)},{merge:true}) 
    }
  }
  
  deleteBookFromFavorites(book){
    //remove is fav from book before deleting so it matches firebase object
    delete book.isFav
    if(this.userId){
      this.afs.doc(`users/${this.userId}`).set({books: firebase.firestore.FieldValue.arrayRemove(book)},{merge:true}) 
    }
  }
  
}
