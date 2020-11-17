import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GoogleBooksResponse, GoogleBookItem, CleanedBookInfo, GoogleBookInfo } from "./search.models";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  books: CleanedBookInfo[] = [];
  // books: GoogleBookItem[] = [];

  async getBooksByAuthor(author){
    return await this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${author}`).toPromise()
    .then((response: GoogleBooksResponse) => {
      this.books = response.items.map(book => {
        let info = book.volumeInfo;
        return{
          title: info.title,
          authors: info.authors,
          image: info.imageLinks ? info.imageLinks.thumbnail : "",
          categories: info.categories,
          infoLink: info.infoLink,
          pageCount: info.pageCount ? info.pageCount : 0
        }
      })
    });
  }
}
