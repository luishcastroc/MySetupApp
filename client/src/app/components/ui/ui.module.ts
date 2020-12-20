import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SetupComponent],
  exports: [SetupComponent],
})
export class UiModule {}
