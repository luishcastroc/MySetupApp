import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import slugify from 'slugify';

import {
  faThumbsUp,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { ISetupDto } from '@models/setup.model';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { SelectUser } from '@state/app.actions';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  @Input()
  setup!: ISetupDto;

  faThumbsUp = faThumbsUp;
  faUser = faUser;
  faEnvelope = faEnvelope;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  goToProfile(username: string, userId: number): void {
    this.store.dispatch([
      new SelectUser(userId),
      new Navigate([`user/${slugify(username, { lower: true })}`]),
    ]);
  }
}
