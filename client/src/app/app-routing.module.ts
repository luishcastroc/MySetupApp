import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'main',
    loadChildren: () =>
      import('./components/main/main.module').then((mod) => mod.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        (mod) => mod.RegisterModule
      ),
  },
  {
    path: 'setups',
    loadChildren: () =>
      import('./components/setups/setups.module').then(
        (mod) => mod.SetupsModule
      ),
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('./components/lists/lists.module').then((mod) => mod.ListsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./components/messages/messages.module').then(
        (mod) => mod.MessagesModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
