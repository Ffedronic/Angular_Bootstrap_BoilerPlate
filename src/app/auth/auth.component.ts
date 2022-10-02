import { AuthService, AuthResponseData } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading = false;
  error!: string;
  authObs!: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.InputEmail;
    const password = form.value.InputPassword;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authObs = this.authService.login(email, password);
    } else {
      this.authObs = this.authService.signup(email, password);
    }

    this.authObs.subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/recipes'])
        console.log(response);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;

        console.log(errorMessage);
      }
    );
    form.reset();
  }
}
