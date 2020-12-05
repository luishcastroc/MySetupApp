import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MessagesComponent }];

@NgModule({
  declarations: [MessagesComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class MessagesModule {}
