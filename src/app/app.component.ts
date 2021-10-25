import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieModalComponent } from './shared/components/cookie-modal/cookie-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Scaffold';
  cookie= 'Scaffold-CookiePolicy'
  cookieValue = 'true'

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    if(this.getCookie() !== this.cookieValue)
      this.openDialog();
  }

  private openDialog() {
    const dialogRef = this.dialog.open(CookieModalComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      sessionStorage.setItem(this.cookie, this.cookieValue);
    });
  }

  private getCookie() {
    return sessionStorage.getItem(this.cookie);
  }
}
