import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import { WithLoadingPipe } from '../../_pipes/withloading.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SetupComponent, WithLoadingPipe],
  exports: [SetupComponent, WithLoadingPipe],
})
export class UiModule {}
