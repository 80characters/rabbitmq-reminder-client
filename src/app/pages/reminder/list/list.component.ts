import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { FetchService } from 'src/app/services/data/fetch.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Task[];

  constructor(private readonly fetchService: FetchService) { }

  ngOnInit() {
    async function fill(s: FetchService) {
      return await s.getAll();
    }

    fill(this.fetchService).then(tasks => this.tasks = tasks).catch(err => console.log(err));
  }

}
