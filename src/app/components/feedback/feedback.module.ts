import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { FeedbackComponent } from './feedback.component';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [SharedModule],
  exports: [FeedbackComponent]
})
export class FeedbackModule {}
