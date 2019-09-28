import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Catering } from 'src/models/catering';

@Injectable({
  providedIn: 'root'
})
export class CateringService {

  private url = 'http://localhost:8080/catering';
  // tslint:disable-next-line: deprecation
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  addCatering(catering: Catering) {
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.post(this.url, JSON.stringify(catering), { headers: this.headers });
  }

  getCatering(pageNumber: number, pageSize: number) {
    const url = this.url + `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get(url, { headers: this.headers });
  }

  getCateringById(id: number) {
    const url = this.url + `/${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  getCategoryByTagName(tag: string) {
    const url = this.url + `/tagName?tagName=${tag}`;
    return this.http.get(url, { headers: this.headers });
  }

  updateCatering(id: number, catering: Catering) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.put(url, JSON.stringify(catering), { headers: this.headers });
  }

  deleteCaterinng(id: number) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.delete(url, { headers: this.headers });
  }
}
