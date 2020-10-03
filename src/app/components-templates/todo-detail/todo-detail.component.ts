import { Component, Input, OnInit } from '@angular/core';
import { TodoTrackerService } from '../simple-todo/todo-tracker.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(public tracker: TodoTrackerService) { }

  ngOnInit(): void {
  }

  @Input() todo;
  toogle() {
    this.todo.done = !this.todo.done;
    this.tracker.track(this.todo);
  }

}
