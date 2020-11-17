import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sortSelected: string;

  @Output () onSortSelected = new EventEmitter();

  handleSortSelectChange(){
    this.onSortSelected.emit(this.sortSelected)
  }
}
