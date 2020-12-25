import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ISetupDto } from 'src/app/_models/setup.model';
import { GetSetups } from 'src/app/_state/app.actions';
import { ApplicationState } from 'src/app/_state/app.state';

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
