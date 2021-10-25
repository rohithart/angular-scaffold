import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Crumbs } from 'src/app/models/Crumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() crumbs: Crumbs[] = [];

  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
