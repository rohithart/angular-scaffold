import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-floatbar',
  templateUrl: './floatbar.component.html',
  styleUrls: ['./floatbar.component.scss']
})
export class FloatbarComponent {
  open = true;
  constructor(private _location: Location) { }

  toggle() {
    this.open = !this.open
  }

  goBack() {
    this._location.back();
  }

}
