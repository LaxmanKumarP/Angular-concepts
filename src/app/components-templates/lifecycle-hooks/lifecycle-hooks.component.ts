import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = {
    name: 'john',
    age: 25
  };
  otherUser = {
    name: 'mike',
    age: 35
  };
  created = false;
  currentUser = this.user;

  changeCurrentUser() {
    this.currentUser = this.otherUser;
  }

  changeCurrentName() {
    this.currentUser.name = 'lucky';
  }
}
