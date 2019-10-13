import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private datePipe: DatePipe) { }

  convertDate(date: Date): string {
    let convertedDate: string;
    this.datePipe = new DatePipe('en-AU');
    convertedDate = this.datePipe.transform(date, 'medium');
    return convertedDate;
  }
}
