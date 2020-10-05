import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-view-hooks',
  templateUrl: './life-cycle-view-hooks.component.html',
  styleUrls: ['./life-cycle-view-hooks.component.css']
})
export class LifeCycleViewHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
