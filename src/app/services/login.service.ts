import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';



const headers = new HttpHeaders({
  'Content-type': 'application/json; charset=UTF-8'
});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private data: Login[] = [];

  private urlApi = 'https://jsonplaceholder.typicode.com/posts/1/comments'

  constructor(
    private http: HttpClient
  ) { }

  Login(credentials: any) {
    console.log(credentials);
  }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }


  add() {
    const urlApi = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };


    this.http.post(urlApi, data, { headers }).subscribe((response) => {
      console.log('creadooooooooooooo:', response);
    });


  }

  

}