import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-modal',
  templateUrl: './cookie-modal.component.html',
  styleUrls: ['./cookie-modal.component.scss']
})
export class CookieModalComponent {

  constructor(public dialogRef: MatDialogRef<CookieModalComponent>) { }

  onYesClick(): void {
    this.dialogRef.close({save: true});
  }
}
