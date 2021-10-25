import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppConfig } from './configs/app.config';
import { AuthGuard } from '@auth0/auth0-angular';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: AppConfig.routes.home, component: HomeComponent, pathMatch: 'full' },
  { path: AppConfig.routes.about, component: AboutComponent, pathMatch: 'full' },
  { path: AppConfig.routes.contact, component: ContactComponent, pathMatch: 'full' },
  { path: AppConfig.routes.faq, component: FaqComponent, pathMatch: 'full' },
  { path: AppConfig.routes.feedback, component: FeedbackComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: AppConfig.routes.error404, component: NotFoundComponent },
  { path: '**', redirectTo: '/' + AppConfig.routes.error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
