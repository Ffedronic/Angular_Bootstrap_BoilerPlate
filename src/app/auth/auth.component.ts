import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading = false;
  error!: string;

  constructor(private authService: AuthService) {}

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
    } else {
      this.authService.signup(email, password).subscribe(
        (response) => {
          this.isLoading = false;
          
          console.log(response);
        },
        (errorMessage) => {
          this.isLoading = false;
          this.error = errorMessage;

          console.log(errorMessage);
        }
      );
    }

    form.reset();
  }
}
