import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { APP_CONFIG, AppConfig } from './configs/app.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/modules/shared.module';

import { environment } from 'src/environments/environment';
import { HomeModule } from './components/home/home.module';
import { NotFoundModule } from './components/not-found/not-found.module';
import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { FeedbackModule } from './components/feedback/feedback.module';
import { FaqModule } from './components/faq/faq.module';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    HomeModule,
    NotFoundModule,
    AboutModule,
    ContactModule,
    FeedbackModule,
    FaqModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      redirectUri: window.location.origin,
      domain: environment.auth0.domain,
      clientId: environment.auth0.client_id,
      audience: `https://${environment.auth0.domain}/api/v2/`,
      httpInterceptor: {
        allowedList: [
          '/api/*',
        ],
      },
		  }),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
