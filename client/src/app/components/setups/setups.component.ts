import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IMemberDto } from 'src/app/_models/member.model';
import { GetMembers } from 'src/app/_state/app.actions';
import { ApplicationState } from 'src/app/_state/app.state';

@Component({
  selector: 'app-setups',
  templateUrl: './setups.component.html',
  styleUrls: ['./setups.component.scss'],
})
export class SetupsComponent implements OnInit {
  @Select(ApplicationState.members)
  members$!: Observable<IMemberDto[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('calling members');
    this.store.dispatch(new GetMembers());
  }
}
