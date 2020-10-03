import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = {
    name: 'Steve jobs',
    age: 60
  }

  currentUser = {
    name: 'jhonyy',
    age: 77
  }
}
