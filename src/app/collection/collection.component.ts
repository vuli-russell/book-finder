import { Component, OnInit} from '@angular/core';
import { CollectionsService } from "../collections.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private collectionsService: CollectionsService) { }

  books: any;

  ngOnInit(): void {
    this.collectionsService.booksStream.subscribe(
      res => {this.books = res ? res.books.map(book => ({...book, isFav: true})) : []}
    )
  }
}
