import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Login, Logout } from 'src/app/_state/app.actions';
import { ApplicationState } from 'src/app/_state/app.state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  @Select(ApplicationState.isAuthenticated)
  isAuthenticated$!: Observable<boolean>;
  authenticated = false;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  private unsubscribeAll!: Subject<any>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.isAuthenticated$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((auth) => {
        this.authenticated = auth;
        if (this.authenticated) {
          this.loginForm.reset();
        }
      });
  }

  login(): void {
    this.store.dispatch(new Login(this.loginForm.value));
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
