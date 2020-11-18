import { Component, OnInit, Input } from '@angular/core';
import { CleanedBookInfo } from "../search.models";
import { CollectionsService } from "../../collections.service";

@Component({
  selector: 'app-result-gallery',
  templateUrl: './result-gallery.component.html',
  styleUrls: ['./result-gallery.component.scss']
})

export class ResultGalleryComponent implements OnInit {

  booksArr: Array<CleanedBookInfo>;

  @Input() set setBooksArray(value: CleanedBookInfo[]) {
    this.booksArr = value
    this.sortedBooksArr = this.booksArr;
  }

  sortedBooksArr: Array<CleanedBookInfo>;
  favourites: string[]

  constructor(
    private collectionsService: CollectionsService) { }

  ngOnInit(): void {
    this.collectionsService.booksStream.subscribe(
      //get favorite books and map their ids
      res => {
        console.log(res)
        this.favourites = res ? res.books.map(book => book.id) : []
        this.booksArr = this.booksArr.map(book => ({...book, isFav: this.favourites.includes(book.id) ? true : false}));
        this.sortedBooksArr = this.sortedBooksArr.map(book => ({...book, isFav: this.favourites.includes(book.id) ? true : false}));
      }
    )
    
  }

  handleSortSelected(sortOrder: string){
    this.sortBooksArr(sortOrder)
  }

  handleAddFavorite(book){
    this.collectionsService.addBookToFavorite(book)
  }

  handleRemoveFavorite(book){
    this.collectionsService.deleteBookFromFavorites(book)
  }

  sortBooksArr(sortOrder?:string) {
    let sortFunction: (a:CleanedBookInfo,b:CleanedBookInfo) => number;
    switch (sortOrder) {
      case "lengthAsc":
        sortFunction = function(a:CleanedBookInfo,b:CleanedBookInfo){return a.pageCount - b.pageCount};
        break;
      case "lengthDesc":
        sortFunction = function(a:CleanedBookInfo,b:CleanedBookInfo){return b.pageCount - a.pageCount};
        break;
      default:
        break;
    }
    this.sortedBooksArr = sortFunction ? this.booksArr.sort(sortFunction) : this.booksArr;
  }


}
