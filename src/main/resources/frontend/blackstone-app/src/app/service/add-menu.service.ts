import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Menu } from 'src/models/menu';

@Injectable({
  providedIn: 'root'
})
export class AddMenuService {
  private url = '/api/menu';

  // tslint:disable-next-line: deprecation
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  addMenu(menu: Menu) {
    this.headers.append('Authorization',  'Bearer ' + sessionStorage.getItem('token'));
    return this.http.post(this.url, JSON.stringify(menu), { headers: this.headers });
  }
}
@Injectable({
  providedIn: 'root'
})
export class GetMenuListService {

  private url =  '/api/menu';

  // tslint:disable-next-line: deprecation
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  getMenu(pageNumber: number, pageSize: number) {
    const url = this.url + `?pagNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get(url, {headers: this.headers});
  }

  getMenuById(id: number) {
    const url = this.url + `/${id}`;
    return this.http.get(url, {headers: this.headers});
  }

  updateMenu(id: number, menu: Menu) {
    const url =  this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('xAuthToken'));
    return this.http.put(url, JSON.stringify(menu), {headers: this.headers});
  }

  deleteMenu(id: number) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('xAuthToken'));
    return this.http.delete(url, {headers: this.headers});
  }
}



