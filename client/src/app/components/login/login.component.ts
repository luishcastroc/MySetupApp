import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/_state/app.actions';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [
      localStorage.getItem('username') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', Validators.required],
  });
  faKey = faKey;
  faUser = faUser;

  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(new Login(this.loginForm.value));
    this.loginForm.reset();
  }

  rememberMe(e: Event): void {
    const target = e.target as HTMLInputElement;
    if (target.checked && this.username?.value) {
      localStorage.setItem('username', this.username.value);
    } else {
      localStorage.removeItem('username');
    }
  }
}
