import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.css']
})
export class TopSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor(private searchService: SearchDataService) { }

  ngOnInit() {
  }

  searchBooks(data: string) {
    this.searchService.changeMessage(data);
  }

}
