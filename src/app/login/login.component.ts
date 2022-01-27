import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errorMessage:string = '';
  loginFailed:boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  getLoginInfo(loginForm: any) {
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe((data) => {
        if (data.message == 'success') {
          this._AuthService.saveCurrentUser(data.user.first_name, data.user.last_name, data.user.email, data.token)
          this._Router.navigate(['/home']);
        }else{
          this.loginFailed = true;
          this.errorMessage = data.message
        }
      });
    }
  }

  ngOnInit(): void {}
}
