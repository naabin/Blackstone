import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = { username: '', password: '' };
  public isLoggedIn = false;
  public hide = true;
  public loginForm: FormGroup;
  public error: boolean;
  public success: boolean;

  loginFormValidator() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  constructor(private loginService: LoginService) {
    this.loginForm = this.loginFormValidator();
  }
  onSubmit() {
    this.loginService.sendCredential(this.credentials.username, this.credentials.password)
      .subscribe((res) => {
        sessionStorage.setItem('token', res.json().token);
        this.isLoggedIn = true;
        this.success = true;
        location.reload();
      }, error => {
        this.isLoggedIn = false;
        this.error = true;
        console.log(error);
      });
  }

  hidden(): void {
    this.hide = !this.hide;
  }
  ngOnInit() {
    if (sessionStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
