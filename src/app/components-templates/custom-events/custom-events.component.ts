import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  heros = [{ id: 1, name: "laxman", power: 250 },
  { id: 2, name: "kumar", power: 50 },
  { id: 3, name: "vinid", power: 350 },
  { id: 4, name: "vani", power: 450 },
  { id: 5, name: "hani", power: 550 }]
  constructor() { }

  ngOnInit(): void {
  }
  delete(heroObj) {
    console.log(heroObj);
  }
}
