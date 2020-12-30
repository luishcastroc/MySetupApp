import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SetupComponent } from '@components/setup/setup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [SetupComponent],
  exports: [FontAwesomeModule, SetupComponent],
})
export class UiModule {}
