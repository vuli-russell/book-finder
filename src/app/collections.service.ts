import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  booksStream;

  constructor(private afs: AngularFirestore) {
    this.booksStream = this.afs.doc(`users/${this.user}`).valueChanges()
  }

  //get this on auth change eventually
  user: string = "testuser";

  addBookToFavorite(book){
    delete book.isFav
    this.afs.doc(`users/${this.user}`).set({books: firebase.firestore.FieldValue.arrayUnion(book)},{merge:true}) 
  }
  
  deleteBookFromFavorites(book){
    //remove is fav from book before deleting so it matches firebase object
    delete book.isFav
    this.afs.doc(`users/${this.user}`).set({books: firebase.firestore.FieldValue.arrayRemove(book)},{merge:true}) 
  }
  
}
