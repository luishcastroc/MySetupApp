import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('@components/main/main.module').then((mod) => mod.MainModule),
      },
      {
        path: 'lists',
        loadChildren: () =>
          import('@components/lists/lists.module').then(
            (mod) => mod.ListsModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('@components/messages/messages.module').then(
            (mod) => mod.MessagesModule
          ),
      },
      {
        path: 'user/:username',
        loadChildren: () =>
          import('@components/user-detail/user-detail.module').then(
            (mod) => mod.UserDetailModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@components/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@components/register/register.module').then(
        (mod) => mod.RegisterModule
      ),
  },
  {
    path: 'setups',
    loadChildren: () =>
      import('@components/setups/setups.module').then(
        (mod) => mod.SetupsModule
      ),
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
