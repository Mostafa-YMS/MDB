import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './userInfo';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<any>(null);

  constructor(private _HttpClient: HttpClient, private _Router:Router) {
    if (localStorage.getItem('userInfo') != null) {
      let next = JSON.parse(localStorage.getItem('userInfo') || '');
      if (next === '') {
        next = null;
      }
      this.currentUser.next(next);
    }
  }

  register(registerValue: object): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signup',
      registerValue
    );
  }

  login(loginValue: object): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signin',
      loginValue
    );
  }

  logOut(){
    this.currentUser.next(null)
    localStorage.removeItem('userInfo')
    this._Router.navigate(['/login'])
  }

  saveCurrentUser(
    firstName: string,
    lastName: string,
    email: string,
    token: string
  ) {
    let user = new User(firstName, lastName, email, token);
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.currentUser.next(user);
  }
}
