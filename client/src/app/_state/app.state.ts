import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUserLogin } from '../_models';

import { AccountService } from '../_services/account.service';
import { Login, Logout } from './app.actions';
import { IAppState } from './app.model';

@State<IAppState>({
  name: 'application',
  defaults: {
    user: {
      username: null,
      token: null,
    },
  },
})
@Injectable()
export class ApplicationState {
  constructor(private accountService: AccountService) {}

  @Selector()
  static token(state: IAppState): string | null {
    return state.user.token;
  }

  @Selector()
  static isAuthenticated(state: IAppState): boolean {
    return !!state.user.token;
  }

  @Action(Login)
  login(
    { patchState }: StateContext<IAppState>,
    { payload }: Login
  ): Observable<IUserLogin> {
    return this.accountService.login(payload).pipe(
      tap(({ token, username }: IUserLogin) => {
        patchState({
          user: {
            username,
            token,
          },
        });
      })
    );
  }

  @Action(Logout)
  logout({ setState }: StateContext<IAppState>): void {
    setState({
      user: {
        username: null,
        token: null,
      },
    });
  }
}
