import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

    constructor(private authServ: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(err => {
                if (err.status == '401') {
                    this.authServ.logout();
                }

                console.log(err);
                const error = err.message || err.error.message || err.statusText;
                return throwError(error);
            })
        );
    }
}
