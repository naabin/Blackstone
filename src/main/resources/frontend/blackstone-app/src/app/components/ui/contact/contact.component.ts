import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

import {first} from 'rxjs/operators'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.contactService.getContacts(0, 10).pipe(first())
      .subscribe(data => console.log(data));

  }

}
