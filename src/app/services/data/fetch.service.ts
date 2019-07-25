import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private readonly http: HttpClient, private readonly authService: AuthService) { }

  async getAll(): Promise<any> {
    const client = await this.authService.getAuth0Client();
    const token = await client.getTokenSilently();

    return this.http
      .get('http://localhost:3000/api/v1/tasks/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .toPromise();
  }
}
