import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';

import { ApplicationState } from '../_state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}
  canActivate(): boolean {
    const isAuthenticated = this.store.selectSnapshot(
      ApplicationState.isAuthenticated
    );
    if (!isAuthenticated) {
      this.store.dispatch(new Navigate(['login']));
      return false;
    }
    return isAuthenticated;
  }
}
