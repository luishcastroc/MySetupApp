import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import { WithLoadingPipe } from '../../_pipes/withloading.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [SetupComponent, WithLoadingPipe],
  exports: [SetupComponent, WithLoadingPipe],
})
export class UiModule {}
