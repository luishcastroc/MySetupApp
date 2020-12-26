import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SetupComponent } from '@components/setup/setup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WithLoadingPipe } from '@pipes/withloading.pipe';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [WithLoadingPipe, SetupComponent],
  exports: [WithLoadingPipe, FontAwesomeModule, SetupComponent],
})
export class UiModule {}
