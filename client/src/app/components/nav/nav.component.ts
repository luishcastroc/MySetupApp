import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUserLogin } from '@models/user-login.model';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { Login, Logout } from '@state/app.actions';
import { ApplicationState } from '@state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Select(ApplicationState.isAuthenticated)
  isAuthenticated$!: Observable<boolean>;

  @Select(ApplicationState.user)
  user$!: Observable<IUserLogin>;

  isCollapsed = true;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(new Login(this.loginForm.value));
    this.loginForm.reset();
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }

  clickButton(e: MouseEvent): void {
    const target = e.target as HTMLTextAreaElement;
    this.store.dispatch(new Navigate([`${target.id}`]));
  }
}
