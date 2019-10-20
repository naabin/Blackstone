import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Tag } from 'src/models/catering';


@Injectable({
  providedIn: 'root'
})
export class TagService {
  private url = '/api/tag';
  // tslint:disable-next-line: deprecation
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  getTags(pageNumber: number, pageSize: number) {
    const url = this.url + `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get(url, {headers: this.headers});
  }

  getTagById(id: number) {
    const url = this.url + `/${id}`;
    return this.http.get(url, {headers: this.headers});
  }

  postTags(tag: Tag) {
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.post(this.url, JSON.stringify(tag), {headers: this.headers });
  }

  updateTags(id: number, tag: Tag) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.put(url, JSON.stringify(tag), {headers: this.headers});
  }

  deleteTags(id: number) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.delete(url, {headers: this.headers});
  }
}

