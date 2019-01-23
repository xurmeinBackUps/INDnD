import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm, ActiveUser } from '../models/user.model';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  private _username : string;
  private _email : string;
  private _password : string;
  
  public user : ActiveUser; 

  loginForm = new LoginForm(
    this._username = '',
    this._email = '',
    this._password = ''
  )
  
  constructor(
    private auth: AuthorizationService,
    private http: HttpClient
  ) { }



}
