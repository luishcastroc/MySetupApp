import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
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
    { patchState, dispatch }: StateContext<IAppState>,
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
        dispatch(new Navigate(['main']));
      })
    );
  }

  @Action(Logout)
  logout({ setState, dispatch }: StateContext<IAppState>): void {
    setState({
      user: {
        username: null,
        token: null,
      },
    });
    dispatch(new Navigate(['login']));
  }
}
