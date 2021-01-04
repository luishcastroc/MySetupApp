import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SetupComponent } from '@components/setup/setup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserTabsComponent } from './user-tabs/user-tabs.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, TabsModule.forRoot()],
  declarations: [SetupComponent, UserTabsComponent],
  exports: [FontAwesomeModule, SetupComponent, UserTabsComponent],
})
export class UiModule {}
