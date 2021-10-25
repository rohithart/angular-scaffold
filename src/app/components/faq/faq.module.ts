import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [SharedModule],
  exports: [FaqComponent]
})
export class FaqModule {}
