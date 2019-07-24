import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rabbitmq-reminder-client';

  constructor(public http: HttpClient) {}

  ping() {
    this.http
      .get('http://localhost:3000/')
      .subscribe(data => console.log(data), err => console.log(err));
  }
}
