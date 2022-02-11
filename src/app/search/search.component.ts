import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  imageBase: string = 'https://image.tmdb.org/t/p/w500/';
  term: string = '';
  searchResults: any;
  search = (): any => {
    if (this.term !== '') {
      this._MoviesService.search('movie', this.term).subscribe((data) => {
        this.searchResults = data.results;
      });
    } else {
      this.searchResults = [];
    }
  };

  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {}
}
