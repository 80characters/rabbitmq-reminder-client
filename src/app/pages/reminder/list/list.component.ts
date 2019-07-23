import { Component, OnInit } from '@angular/core';
import { TASKS } from 'mock/mock-tasks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit() {
  }

}
