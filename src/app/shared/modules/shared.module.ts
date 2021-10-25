import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { FloatbarComponent } from 'src/app/shared/components/floatbar/floatbar.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SubHeadingComponent } from '../components/sub-heading/sub-heading.component';
import { CookieModalComponent } from '../components/cookie-modal/cookie-modal.component';
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HeadingComponent,
    FloatbarComponent,
    ModalComponent,
    LoadingComponent,
    FooterComponent,
    SubHeadingComponent,
    CookieModalComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    NavBarComponent,
    HeadingComponent,
    FloatbarComponent,
    ModalComponent,
    LoadingComponent,
    FooterComponent,
    SubHeadingComponent,
    CookieModalComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule {}
