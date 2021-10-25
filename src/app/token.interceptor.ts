import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Auth0AuthService } from 'src/app/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: Auth0AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getToken
      .pipe(
        mergeMap((token) => {
          return next.handle(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
        })
      );
  }
}
