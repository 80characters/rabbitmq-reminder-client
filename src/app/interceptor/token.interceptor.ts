import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    public static currentTeamId: any;
    constructor(private readonly auth: AuthService) {
        console.log('[HttpInterceptor] append auth0<access-token> to headers.');
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestOption: any = {};

        if (this.auth.getToken()) {
            requestOption.setHeaders = {
                Authorization: `Bearer ${this.auth.getToken()}`
            };
        }

        request = request.clone(requestOption);

        return next.handle(request);
    }
}
