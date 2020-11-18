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
    this.books = this.collectionsService.getFavorites();
    this.collectionsService.books.subscribe(
      res => {this.books = res.books}
    )
  }
}
