import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupsComponent } from './setups.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SetupsComponent }];

@NgModule({
  declarations: [SetupsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class SetupsModule {}
