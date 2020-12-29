import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUserLogin } from '../_models';
import { IMemberDto } from '../_models/member.model';
import { ISetupDto } from '../_models/setup.model';
import { AccountService } from '../_services/account.service';
import { MemberService } from '../_services/member.service';
import { SetupService } from '../_services/setup.service';
import {
  GetMemberById,
  GetMembers,
  GetSetups,
  Login,
  Logout,
  Register,
  SelectUser,
} from './app.actions';
import { IAppState } from './app.model';

@State<IAppState>({
  name: 'application',
  defaults: {
    user: undefined,
    members: [],
    setups: [],
    selectedUser: 0,
    member: undefined,
  },
})
@Injectable()
export class ApplicationState {
  constructor(
    private accountService: AccountService,
    private memberService: MemberService,
    private setupService: SetupService
  ) {}

  @Selector()
  static token({ user }: IAppState): string | undefined | null {
    return user?.token;
  }

  @Selector()
  static isAuthenticated({ user }: IAppState): boolean {
    return !!user?.token;
  }

  @Selector()
  static user({ user }: IAppState): IUserLogin | undefined {
    return user;
  }

  @Selector()
  static members({ members }: IAppState): IMemberDto[] | undefined {
    return members;
  }

  @Selector()
  static setups({ setups }: IAppState): ISetupDto[] | undefined {
    return setups;
  }

  @Selector()
  static userSetups({ member }: IAppState): IMemberDto | null | undefined {
    return member;
  }

  @Selector()
  static selectedUser({ selectedUser }: IAppState): number {
    return selectedUser;
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
  ): Observable<IUserLogin> {
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
  getMembers({
    patchState,
  }: StateContext<IAppState>): Observable<IMemberDto[]> {
    return this.memberService.getMembers().pipe(
      tap((members: IMemberDto[]) => {
        patchState({
          members,
        });
      })
    );
  }

  @Action(GetSetups)
  getSetups({ patchState }: StateContext<IAppState>): Observable<ISetupDto[]> {
    return this.setupService.getSetups().pipe(
      tap((setups: ISetupDto[]) => {
        patchState({
          setups,
        });
      })
    );
  }

  @Action(GetMemberById)
  getMemberById(
    { patchState }: StateContext<IAppState>,
    { payload }: GetMemberById
  ): Observable<IMemberDto> {
    return this.memberService.getMemberById(payload).pipe(
      tap((member: IMemberDto) => {
        patchState({
          member,
        });
      })
    );
  }

  @Action(Logout)
  logout({ patchState, dispatch }: StateContext<IAppState>): void {
    patchState({
      user: undefined,
      members: [],
      setups: [],
      selectedUser: 0,
      member: undefined,
    });
    dispatch(new Navigate(['login']));
  }

  @Action(SelectUser)
  selectUser(
    { patchState }: StateContext<IAppState>,
    { payload }: SelectUser
  ): void {
    const selectedUser = payload;
    patchState({
      selectedUser,
    });
  }
}
