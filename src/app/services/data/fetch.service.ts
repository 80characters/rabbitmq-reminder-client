import { Injectable } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private getAllUrl = 'http://localhost:3000/api/v1/tasks/';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Task[]> {
    console.log('[Observable] get task list.');
    return this.http.get<Task[]>(this.getAllUrl);
  }
}
