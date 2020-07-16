import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
private _signupUrl = 'http://localhost:3000/signup';
  constructor(private http:HttpClient) { }

  signup(user){
    console.log(user);
    return this.http.post(this._signupUrl,{"user":user})
    .subscribe(data => {console.log(data)})
  }

  login(credential){
    // console.log(credential);
    return this.http.post('http://localhost:3000/login',{"credential":credential})
  }
}