import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

  fromEventLogs: string[] = [];
  ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  constructor() { }

  ngOnInit(): void {
    // form event
    const specialElement = document.getElementById('special-area');
    const mouseEventsObservable = fromEvent(specialElement, 'mousemove');

    const subscription = mouseEventsObservable.subscribe(
      (evt: MouseEvent) => {
        this.fromEventLogs.push
      }
    )



    // Ajax Method




    // interval method
    const secondsCounterObservable = interval(1000);

    secondsCounterObservable.subscribe(
      n => this.intervalLogs.push(`it's been ${n} seconds since subscribing`)
    );

  }

}
