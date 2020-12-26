import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import slugify from 'slugify';

import {
  faThumbsUp,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { ISetupDto } from '@models/setup.model';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProfile(username: string): void {
    console.log(slugify(username, { lower: true }));
    this.router.navigate([`user/${slugify(username, { lower: true })}`]);
  }
}
