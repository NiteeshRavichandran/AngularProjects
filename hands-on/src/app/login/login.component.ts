import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService){}
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[Validators.minLength(9),Validators.required]),
      password: new FormControl(null,[Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),Validators.required])
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.authService.login();
  }

  homepage(){
    this.router.navigate(['/home']);
  }

  moviepage(){
    this.router.navigate(['/'])
  }
}

