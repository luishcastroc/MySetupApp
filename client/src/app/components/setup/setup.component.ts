import { Component, Input } from '@angular/core';
import {
  faEnvelope,
  faThumbsUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ISetupDto } from '@models/setup.model';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { SelectUser } from '@state/app.actions';
import slugify from 'slugify';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  @Input()
  setup!: ISetupDto;

  faThumbsUp = faThumbsUp;
  faUser = faUser;
  faEnvelope = faEnvelope;

  constructor(private store: Store) {}

  goToProfile(username: string, userId: number): void {
    localStorage.setItem('selectedUser', userId.toString());
    this.store.dispatch([
      new SelectUser(userId),
      new Navigate([`user/${slugify(username, { lower: true })}`]),
    ]);
  }
}
