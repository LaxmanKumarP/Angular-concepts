import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, from, of, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

  fromEventLogs: string[] = [];
  ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  fromLogs: string[] = [];
  ofLogs: string[] = [];
  customObservableLogs: string[] = [];
  customObservable1Logs: string[] = [];
  arraysObservableLogs: string[] = [];
  constructor() { }

  ngOnInit(): void {
    // form event
    const specialElement = document.getElementById('special-area');
    const mouseEventsObservable = fromEvent(specialElement, 'mousemove');

    const subscription = mouseEventsObservable.subscribe(
      (evt: MouseEvent) => {
        this.fromEventLogs.push(`coords ${evt.clientX} X ${evt.clientY}`);
        if (evt.clientX < 250 && evt.clientY < 230) {
          subscription.unsubscribe();
          this.fromEventLogs.push(`unsubscribed from mouse events`);
        }
      }
    );

    // Ajax Method

    let todosUrl = 'https://todos-api-dev.herokuapp.com/todos';
    const todosObservable = ajax(todosUrl);
    todosObservable.subscribe(res => {
      console.log(res.status, res.response);
      this.ajaxLogs.push(`response came`);
    })



    // interval method
    const secondsCounterObservable = interval(1000);

    secondsCounterObservable.subscribe(
      n => this.intervalLogs.push(`it's been ${n} seconds since subscribing`)
    );

    // from array
    let numbers = [10, 20, 30, 40, 50];
    const arrayObservable = from(numbers);
    arrayObservable.subscribe(n => {
      this.fromLogs.push(`${n}`);
    })

    // of 

    const ofObservable = of(60, 70, 80, 90, 100);
    ofObservable.subscribe(n => this.ofLogs.push(`${n}`));

    // custom observable with new keyword
    let customObservable = new Observable(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });



    customObservable.subscribe(
      x => this.customObservableLogs.push(`got value ${x}`),
      err => this.customObservableLogs.push(`some error occured ${err}`),
      () => this.customObservableLogs.push(`done`)
    );

    // custom observable with error 
    let customObservable1 = new Observable(function (observer) {
      try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
          observer.next(4);
          observer.complete();
        }, 1000);
      }
      catch (err) {
        observer.error(err);
      }

    });

    customObservable1.subscribe(
      x => this.customObservable1Logs.push(`got value ${x}`),
      err => this.customObservable1Logs.push(`some error occured ${err}`),
      () => this.customObservable1Logs.push(`done`)
    );

    // custom observable on array

    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arraysObservable = new Observable(function (observer) {
      numbersArray.forEach(n => {
        observer.next(n);
      })
      observer.complete();
    })

    arraysObservable.subscribe(
      x => this.arraysObservableLogs.push(`got value ${x}`),
      err => this.arraysObservableLogs.push(`some error occured ${err}`),
      () => this.arraysObservableLogs.push(`done`)
    );

  }

}
