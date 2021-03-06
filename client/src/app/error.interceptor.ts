import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private store: Store,
    private toastr: ToastrService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const errors: string[] = error.error.errors as string[];
                const modalStateErrors: string[] = [];
                errors.forEach((err: string) => {
                  modalStateErrors.push(err);
                });
                throw modalStateErrors;
              } else {
                this.toastr.error(error.statusText, error.status);
              }
              break;
            case 401:
              if (!this.router.routerState.snapshot.url.includes('/user/')) {
                this.toastr.error(error.statusText, error.status);
              }
              break;
            case 404:
              this.store.dispatch(new Navigate(['/not-found']));
              break;
            case 500:
              this.store.dispatch(new Navigate(['/server-error']));
              break;
            default:
              this.toastr.error('Something unexpected went wrong');
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
