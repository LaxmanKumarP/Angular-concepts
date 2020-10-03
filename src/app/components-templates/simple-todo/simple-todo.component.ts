import { Component, OnInit } from '@angular/core';
import { TodoTrackerService } from './todo-tracker.service';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css'],
  providers: [TodoTrackerService]
})  
export class SimpleTodoComponent implements OnInit {

  userActions = [];

  constructor(public tracker: TodoTrackerService) { }

  ngOnInit(): void {
    this.tracker.todoObservable$.subscribe(todoAction => {
      this.userActions.push(todoAction);
    })
  }

  todos = [{ id: 1, title: 'pay bills', done: false },
  { id: 2, title: 'watch movies', done: false },
  { id: 3, title: 'drive to hotel', done: false },
  { id: 4, title: 'brush teeth', done: true },
  { id: 5, title: 'do homework', done: true }];

}
