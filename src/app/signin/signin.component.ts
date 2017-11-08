import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { UserModel } from './signin.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  dataUser: UserModel;
  //token: string;
  constructor(private http: Http) { }

  ngOnInit() {
    this.dataUser = new UserModel();
  }

  postUserAuth(dataUser){
    debugger;
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    //let data = JSON.stringify({username:user, password:pass});
    this.http.post('http://localhost:8820/api/user/authenticate',JSON.stringify(dataUser), opsi)
    .subscribe((res:Response) => {
      debugger;
      //let user = res.json().token;
      //window.localStorage.setItem('currentUser', JSON.stringify(user));
      document.cookie="token="+res.json().token;
      window.location.href='/';
    });
    debugger;
  }

}
