import { IUserLogin } from '@models/user-login.model';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user: string | null = localStorage.getItem('application.user');
    let token: string | null = null;
    if (user !== 'undefined') {
      const parsedUser: IUserLogin = JSON.parse(user || '') as IUserLogin;
      token = parsedUser.token;
    }

    let reqClone;
    if (token && token !== 'undefined') {
      reqClone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(reqClone ? reqClone : request);
  }
}
