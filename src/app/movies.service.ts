import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=1d18d1693dc23d7da6c1ce49f5e63a81`)
  }

  getItem(type:string, id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=1d18d1693dc23d7da6c1ce49f5e63a81&language=en-US`)
  }
}

