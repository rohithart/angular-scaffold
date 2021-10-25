import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    home: 'home',
    about: 'about',
    contact: 'contact',
    feedback: 'feedback',
    faq: 'faq',
    error404: '404'
  },
  endpoints: {}
};
