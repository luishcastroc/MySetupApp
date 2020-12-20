import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUserLogin } from '../_models';
import { IMemberDto } from '../_models/member.model';
import { AccountService } from '../_services/account.service';
import { MemberService } from '../_services/member.service';
import { GetMembers, Login, Logout, Register } from './app.actions';
import { IAppState } from './app.model';

@State<IAppState>({
  name: 'application',
  defaults: {
    user: {
      username: null,
      name: null,
      token: null,
    },
    members: [],
  },
})
@Injectable()
export class ApplicationState {
  constructor(
    private accountService: AccountService,
    private memberService: MemberService
  ) {}

  @Selector()
  static token(state: IAppState): string | null {
    return state.user.token;
  }

  @Selector()
  static isAuthenticated(state: IAppState): boolean {
    return !!state.user.token;
  }

  @Selector()
  static user(state: IAppState): IUserLogin {
    return state.user;
  }

  @Selector()
  static members(state: IAppState): IMemberDto[] {
    return state.members;
  }

  @Action(Login)
  login(
    { patchState, dispatch }: StateContext<IAppState>,
    { payload }: Login
  ): Observable<IUserLogin> {
    return this.accountService.login(payload).pipe(
      tap(({ token, username, name }: IUserLogin) => {
        patchState({
          user: {
            username,
            name,
            token,
          },
        });
        dispatch(new Navigate(['main']));
      })
    );
  }

  @Action(Register)
  register(
    { patchState, dispatch }: StateContext<IAppState>,
    { payload }: Register
  ) {
    return this.accountService.register(payload).pipe(
      tap(({ token, username, name }: IUserLogin) => {
        patchState({
          user: {
            username,
            name,
            token,
          },
        });
        dispatch(new Navigate(['main']));
      })
    );
  }

  @Action(GetMembers)
  getMembers({ patchState }: StateContext<IAppState>) {
    return this.memberService.getMembers().pipe(
      tap((members: IMemberDto[]) => {
        patchState({
          members,
        });
      })
    );
  }

  @Action(Logout)
  logout({ setState, dispatch }: StateContext<IAppState>): void {
    setState({
      user: {
        username: null,
        name: null,
        token: null,
      },
      members: [],
    });
    dispatch(new Navigate(['login']));
  }
}
