import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';
import { ApplicationState } from './_state/app.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsModule } from './components/lists/lists.module';
import { MessagesModule } from './components/messages/messages.module';
import { NavComponent } from './components/nav/nav.component';
import { SetupsModule } from './components/setups/setups.module';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SetupsModule,
    ListsModule,
    MessagesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ApplicationState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'application.user',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
