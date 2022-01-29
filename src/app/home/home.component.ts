import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingShows: any[] = [];
  term: string = '';
  imageBase: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.getTrending('movies').subscribe((data) => {
      data.results.sort((a: any, b: any) => {
        return b.vote_average - a.vote_average;
      });
      this.trendingMovies = data.results.slice(0, 10);
    });

    this._MoviesService.getTrending('tv').subscribe((data) => {
      data.results.sort((a: any, b: any) => {
        return b.vote_average - a.vote_average;
      });
      this.trendingShows = data.results.slice(0, 10);
    });
  }
}
