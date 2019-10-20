import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SpecialOFD } from 'src/models/special';

@Injectable({
  providedIn: 'root'
})
export class SpeciailOfdService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  private url = '/api/special';

  // tslint:disable-next-line: deprecation
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  postSpecailOFD(specialOFD: SpecialOFD) {
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.post(this.url, JSON.stringify(specialOFD), { headers: this.headers });
  }

  getSpecialOFDByPage(pageNumber: number, pageSize: number) {
    const url = this.url + `?pageNumber = ${pageNumber}&pageSize=${pageSize}`;
    return this.http.get(url, { headers: this.headers });
  }

  getSpecialOFDById(id: number) {
    const url = this.url + `/${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  updateSpecialOFD(id: number, special: SpecialOFD) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.put(url, JSON.stringify(special), { headers: this.headers });
  }

  deleteSpecailOFD(id: number) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.delete(url, { headers: this.headers });
  }
}
