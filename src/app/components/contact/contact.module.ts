import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [SharedModule],
  exports: [ContactComponent]
})
export class ContactModule {}
