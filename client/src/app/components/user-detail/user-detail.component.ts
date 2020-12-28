import { Component, OnInit } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { ApplicationState } from '@state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Select(ApplicationState.isAuthenticated)
  isAuthenticated$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  clickButton(e: MouseEvent): void {
    const target = e.target as HTMLTextAreaElement;
    this.store.dispatch(new Navigate([`${target.id}`]));
  }
}
