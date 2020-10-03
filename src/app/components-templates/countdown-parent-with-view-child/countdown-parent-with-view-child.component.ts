import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component'

@Component({
  selector: 'app-countdown-parent-with-view-child',
  templateUrl: './countdown-parent-with-view-child.component.html',
  styleUrls: ['./countdown-parent-with-view-child.component.css']
})
export class CountdownParentWithViewChildComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild(CountdownTimerComponent) private timerComponent: CountdownTimerComponent;
  ngOnInit(): void {
  }
  start() { this.timerComponent.start() };
  stop() { this.timerComponent.stop() };
  seconds() {
    return 0;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.seconds = () => this.timerComponent.seconds

    }, 0);
  }

}
