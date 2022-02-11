import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey:string = '1d18d1693dc23d7da6c1ce49f5e63a81';

  constructor(private _HttpClient: HttpClient) {}

  getTrending(type: string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/trending/${type}/day?api_key=${this.apiKey}`
    );
  }

  getPopular(type: string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/${type}/popular/?api_key=${this.apiKey}`
    );
  }

  getItem(type: string, id: string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/${type}/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }

  search(type: string, query: string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/search/${type}?api_key=${this.apiKey}&query=${query}`
    );
  }
}
