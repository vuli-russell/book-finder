import { Component, OnInit, Input } from '@angular/core';
import { CleanedBookInfo } from '../search/search.models';
import { CollectionsService } from "../collections.service";

import { faStar as solidStar, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  faLink = faExternalLinkAlt;
  faSolidStar = solidStar;
  faOutlineStar = outlineStar;

  @Input() book: CleanedBookInfo

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
  }

  handleAddFavorite(book : CleanedBookInfo):void{
    this.collectionsService.addBookToFavorite(book)
  }

  handleRemoveFavorite(book : CleanedBookInfo):void{
    this.collectionsService.deleteBookFromFavorites(book)
  }

}
