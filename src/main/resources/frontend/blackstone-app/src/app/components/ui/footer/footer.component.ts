import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  showAddress() {
    document.location.href = 'https://www.google.com/maps/dir/-35.1880863,149.1446448/'
    + 'blackstone+cafe+address/@-35.2637872,149.071158,12z/' +
    'data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x6b164c6312f0724d:0x23f79717fdbcb1a7!2m2!1d149.1542713!2d-35.3431678';
  }

  ngOnInit() {
  }

}
