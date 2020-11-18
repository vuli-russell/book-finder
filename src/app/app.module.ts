import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ResultGalleryComponent } from './search/result-gallery/result-gallery.component';
import { FilterComponent } from './search/result-gallery/filter/filter.component';
import { AngularFireModule } from "@angular/fire";

const routes: Routes = [
  {path: "", component: SearchComponent},
  {path: "collection", component: CollectionComponent}
]

const firebaseConfig = {
  apiKey: "AIzaSyDQV5FQxZso1mxLElMTidZoNhZz4tFsOFo",
  authDomain: "book-find-7d50b.firebaseapp.com",
  databaseURL: "https://book-find-7d50b.firebaseio.com",
  projectId: "book-find-7d50b",
  storageBucket: "book-find-7d50b.appspot.com",
  messagingSenderId: "366415703390",
  appId: "1:366415703390:web:3de3fd978dfb1d4b5db3cf",
  measurementId: "G-8Y9EL9S16Z"
};


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CollectionComponent,
    ResultGalleryComponent,
    FilterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
