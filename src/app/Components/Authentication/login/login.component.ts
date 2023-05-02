import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authS: AuthService,
    private router: Router,
    private toastrS: ToastrService
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  startLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log('form', this.loginForm);
    const { username, password } = this.loginForm.value;
    this.isLoggedIn = true;
    this.authS.login(username, password).subscribe({
      next: (loginResult: any) => {
        if (loginResult) {
          this.authS.storeDataInLocalStorage(loginResult, 'user');
          this.isLoggedIn = false;
          this.toastrS.success(`Welcome ${loginResult.username}`, 'Success');
          this.router.navigate(['/']);
        }
      },
      error: (err: any) => {
        this.toastrS.error(err.message || err.error, 'Error');
        this.isLoggedIn = false;
        return EMPTY;
      },
    });
  }
}
