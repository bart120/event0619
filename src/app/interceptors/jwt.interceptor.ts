import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private token: string;

    constructor(private authServ: AuthenticationService) {
        this.authServ.auth.subscribe(
            data => this.token = data
        );
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.token !== '') {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`,
                    Host: 'formation-roomy.inow.fr'
                }
            });
        }
        return next.handle(req);
    }
}
