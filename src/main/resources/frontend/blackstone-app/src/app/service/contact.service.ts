import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/models/contact';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private http: HttpClient){}

    private url = '/api/contact';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    postContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.url + '/new', JSON.stringify(contact), this.httpOptions);
            

    }

    getContacts(pageNumber: number, pageSize:number): Observable<Contact[]>{
        const url = `${this.url}/all?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        return this.http.get<Contact[]>(url,this.httpOptions).pipe();
    }

    

}