import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = 'http://localhost:8080/images';

  // tslint:disable-next-line: deprecation
  private headers = new Headers({});

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  postImage(image: File, imageName: string) {
    const url = this.url + `?imageName=${imageName}`;
    const formdata = new FormData();
    formdata.append('file', image);
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.post(url, formdata, { headers: this.headers });
  }


  getImages(pageNumber: number, pageSize: number) {
    const url = this.url + `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get(url, { headers: this.headers });
  }

  getImageById(id: number) {
    const url = this.url + `${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  deleteImageById(id: number) {
    const url = this.url + `/${id}`;
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.http.delete(url, { headers: this.headers });
  }
}
