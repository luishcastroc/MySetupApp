import { Component, OnInit } from '@angular/core';
import { ISetupDto } from '@models/setup.model';
import { Select, Store } from '@ngxs/store';
import { GetSetups } from '@state/app.actions';
import { ApplicationState } from '@state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-setups',
  templateUrl: './setups.component.html',
  styleUrls: ['./setups.component.scss'],
})
export class SetupsComponent implements OnInit {
  @Select(ApplicationState.setups)
  setups$!: Observable<ISetupDto[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSetups());
  }
}
