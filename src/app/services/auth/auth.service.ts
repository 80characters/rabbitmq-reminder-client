import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/app/entities/token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  saveTokenAsKey = 'auth0-access_token';

  getToken(): string {
    let accessToken = localStorage.getItem(this.saveTokenAsKey);

    if (!this._tokenNotExpired(accessToken)) {
      this._refreshToken().subscribe((token: Token) => {
        console.log('[Observable] refresh token.');

        if (token.access_token) {
          accessToken = token.access_token;
          localStorage.setItem(this.saveTokenAsKey, token.access_token);
        }
      });
    }

    return accessToken;
  }

  private _refreshToken(): Observable<Token> {
    return this.http.post<Token>(
      environment.auth0.uri,
      environment.auth0.config,
      {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      }
    );
  }

  private _tokenNotExpired(token) {
    if (token) {
      const jwtHelper = new JwtHelperService();
      return token != null && !jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }
}
