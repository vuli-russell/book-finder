import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private afs: AngularFirestore) { }

  //get this on auth change eventually
  user: string = "testuser";

  books: any = "ayyy";

  addBookToFavorite(book){
    this.afs.doc(`users/${this.user}`).set({books: firebase.firestore.FieldValue.arrayUnion(book)},{merge:true}) 
  }
  
  deleteBookFromFavorites(book){
    this.afs.doc(`users/${this.user}`).set({books: firebase.firestore.FieldValue.arrayRemove(book)},{merge:true}) 
  }

  getFavorites(){
    this.books = this.afs.doc(`users/${this.user}`).valueChanges()
  }
  
}
