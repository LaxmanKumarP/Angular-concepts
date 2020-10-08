import { Component, OnInit } from '@angular/core';
import { TodoTrackerService } from '../../components-templates/simple-todo/todo-tracker.service';
@Component({
  selector: 'app-simpleserviceexample',
  templateUrl: './simpleserviceexample.component.html',
  styleUrls: ['./simpleserviceexample.component.css'],
  providers: [TodoTrackerService]
})
export class SimpleserviceexampleComponent implements OnInit {

  userActions = [];

  constructor(private tracker: TodoTrackerService) {
    this.tracker.todoObservable$.subscribe(todoAction => {
      this.userActions.push(todoAction);
    })
  }
  ngOnInit(): void {
  }

  todos = [{ id: 1, title: 'check the basket', done: true },
  { id: 2, title: 'coock food', done: false },
  { id: 3, title: 'eat healthy', done: false },
  { id: 4, title: 'go to work', done: false },
  { id: 5, title: 'get to bed early', done: true }];
}
