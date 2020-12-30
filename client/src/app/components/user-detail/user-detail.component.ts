import { IAppState } from '@state/app.model';
import { GetMemberById, SelectUser } from './../../_state/app.actions';
import { Component, OnInit } from '@angular/core';
import { ISetupDto } from '@models/setup.model';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { ApplicationState } from '@state/app.state';
import { combineLatest, Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Select(ApplicationState.isAuthenticated)
  isAuthenticated$!: Observable<boolean>;

  @Select(ApplicationState.userSetups)
  member$!: Observable<ISetupDto>;

  selectedUser!: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSelectedUser();
    this.store.dispatch(new GetMemberById(this.selectedUser));
  }

  clickButton(e: MouseEvent): void {
    const target = e.target as HTMLTextAreaElement;
    this.store.dispatch(new Navigate([`${target.id}`]));
  }

  getSelectedUser(): void {
    const localUser = localStorage.getItem('selectedUser')
      ? Number(localStorage.getItem('selectedUser'))
      : null;

    if (localUser) {
      this.store.dispatch(new SelectUser(localUser));
    }

    this.selectedUser = localUser
      ? localUser
      : this.store.selectSnapshot<number>(
          ({ selectedUser }: IAppState) => selectedUser
        );
  }
}
