import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private _AuthService: AuthService) {
    this._AuthService.currentUser.subscribe((data) => {
      if (data != null) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logOut() {
    this._AuthService.logOut();
  }

  ngOnInit(): void {}
}
