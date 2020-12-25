import { Component, Input, OnInit } from '@angular/core';
import { ISetupDto } from 'src/app/_models/setup.model';
import {
  faThumbsUp,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
