import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@components/ui.module';

import { UserDetailComponent } from './user-detail.component';

const routes: Routes = [{ path: '', component: UserDetailComponent }];

@NgModule({
  declarations: [UserDetailComponent],
  imports: [RouterModule.forChild(routes), CommonModule, UiModule],
})
export class UserDetailModule {}
