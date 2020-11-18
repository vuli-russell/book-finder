import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";
import { CleanedBookInfo } from './search.models';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  faSearch=faSearch;
  areBooksLoaded = false;
  booksArr: CleanedBookInfo[];
  searchText: string;

  async handleSearchClick(){
    await this.searchService.getBooksByAuthor(this.searchText)
    this.booksArr = this.searchService.books
    this.areBooksLoaded = true;
  }
}
