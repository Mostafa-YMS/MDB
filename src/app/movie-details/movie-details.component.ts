import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  type:any;
  id:any;
  imageBase: string = 'https://image.tmdb.org/t/p/w500/';
  itemDetails:any;

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { 
    this.id = _ActivatedRoute.snapshot.paramMap.get('id')
    this.type = _ActivatedRoute.snapshot.paramMap.get('type')
  }

  ngOnInit(): void {
    this._MoviesService.getItem(this.type, this.id).subscribe((data)=>{
      this.itemDetails = data;
      console.log(this.itemDetails);
      
    })
  }

}
