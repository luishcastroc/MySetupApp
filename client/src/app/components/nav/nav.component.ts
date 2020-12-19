import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUserLogin } from 'src/app/_models';
import { Login, Logout } from 'src/app/_state/app.actions';
import { ApplicationState } from 'src/app/_state/app.state';

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

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(new Login(this.loginForm.value));
    this.loginForm.reset();
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }

  clickButton(e: MouseEvent) {
    const target = e.target as HTMLTextAreaElement;
    this.router.navigate([`${target.id}`]);
  }
}
