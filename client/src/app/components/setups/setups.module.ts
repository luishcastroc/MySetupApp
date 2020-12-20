import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupsComponent } from './setups.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../ui/ui.module';

const routes: Routes = [{ path: '', component: SetupsComponent }];

@NgModule({
  declarations: [SetupsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, UiModule],
})
export class SetupsModule {}
