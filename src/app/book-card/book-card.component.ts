import { Component, OnInit, Input } from '@angular/core';
import { CleanedBookInfo } from '../search/search.models';
import { CollectionsService } from "../collections.service";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: CleanedBookInfo

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
  }

  handleAddFavorite(book){
    this.collectionsService.addBookToFavorite(book)
  }

  handleRemoveFavorite(book){
    this.collectionsService.deleteBookFromFavorites(book)
  }

}
