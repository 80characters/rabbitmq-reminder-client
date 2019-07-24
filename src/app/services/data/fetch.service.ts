import { Injectable } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private getAllUrl = 'http://localhost:3000/api/v1/tasks/';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.getAllUrl);
  }

  getToken(): Observable<Token> {
    return this.http.post<Token>(
      'https://80chars.auth0.com/oauth/token',
      {
        client_id: 'TbhzLaNzj12ZMUAOze3TRrmE6mHYrS57',
        client_secret: 'QNeft6IeXuOGZstM9zbGoq0yEpevr0IfHYD2QXDgVXZAewd-J6Kyqpt5fV0I1HKW',
        audience: 'localhost',
        grant_type: 'client_credentials'
      },
      {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      }
    );
  }
}
