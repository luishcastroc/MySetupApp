import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { ApplicationState } from '../_state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(): boolean {
    const isAuthenticated = this.store.selectSnapshot(
      ApplicationState.isAuthenticated
    );
    return isAuthenticated;
  }
}
