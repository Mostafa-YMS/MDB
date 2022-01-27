import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private _MoviesService:MoviesService) { }

  
  ngOnInit(): void {
    this._MoviesService.getTrending('Movies').subscribe((data)=>{
      console.log(data);
      
    })
  }

}