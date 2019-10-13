import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private baseUrl = '/api';

  // tslint:disable-next-line: deprecation
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  sendCredential(username: string, password: string) {
    const url = this.baseUrl + '/authenticate';
    return this.http.post(url, { username, password }, { headers: this.headers });
  }



  logout() {
    const url = this.baseUrl + '/logout';
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.post(url, null, { headers: this.headers });
  }
}
