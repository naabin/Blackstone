import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public show = false;
  constructor() { }

  date = new Date(Date.now());

  onClick() {
    this.show = !this.show;
  }
  ngOnInit() {
  }

}
