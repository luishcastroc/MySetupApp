import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Login } from '@state/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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

  get userFromLocalStorage(): boolean {
    return !!localStorage.getItem('username');
  }

  constructor(private fb: FormBuilder, private store: Store) {}

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
