import { Component, Input, OnInit } from '@angular/core';
import { ISetupDto } from 'src/app/_models/setup.model';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  @Input()
  setup!: ISetupDto;

  constructor() {}

  ngOnInit(): void {
    console.log('setup: ', this.setup);
  }
}
