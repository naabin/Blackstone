import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  public isLoggedIn = false;

  logout() {
    this.loginService.logout().subscribe((res) => {
      sessionStorage.clear();
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
