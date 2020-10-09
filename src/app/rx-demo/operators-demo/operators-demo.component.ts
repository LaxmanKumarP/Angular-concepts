import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-operators-demo',
  templateUrl: './operators-demo.component.html',
  styleUrls: ['./operators-demo.component.css']
})
export class OperatorsDemoComponent implements OnInit {

  constructor() { }
  squaredNumberLogs: Array<number> = [];
  multipledNumberLogs: Array<number> = [];
  oddFilteredLogs: number[] = [];
  valu: number[] = [];
  squarepipeLogs: number[] = [];
  pipeLogss: number[] = [];
  ngOnInit(): void {
    // created obsevable using of method
    let numbersObservable = of(1, 2, 3, 4, 5);

    let squareValuesMapFunc = map((val: number) => val * val);
    let squaredNumbersObservable = squareValuesMapFunc(numbersObservable);

    squaredNumbersObservable.subscribe(squaredNumbers => this.squaredNumberLogs.push(squaredNumbers));

    // custom operator:multiply by given operator
    function multiplyByGiven(givenValue) {
      return function multiplyByGivenFunc(inputObservable) {
        var outputObservable = new Observable(function subscribe(observer) {
          inputObservable.subscribe({
            next: (val) => observer.next(givenValue * val),
            error: (err) => observer.next(err),
            complete: () => observer.complete()
          })
        })
        return outputObservable;
      }
    }
    let multiplyByGivenFunc = multiplyByGiven(10);
    let multipliedNumbersObservable = multiplyByGivenFunc(numbersObservable);
    multipliedNumbersObservable.subscribe((multipliedNumber: number) => this.multipledNumberLogs.push(multipliedNumber));


    // Applying map and filter operators
    let oddFilterFunc = filter((val: number) => val % 2 !== 0);
    let oddFiltered$ = oddFilterFunc(numbersObservable);

    let squareMapFunc = map((val: number) => val * val);
    let oddSquaredNumbers$ = squareMapFunc(oddFiltered$);

    oddSquaredNumbers$.subscribe(v => this.oddFilteredLogs.push(v));

    // Applying map and filter operators through pipe
    let squareOddValsPipeFunc = pipe(filter((val: number) => val % 2 !== 0),
      map(n => n * n));

    let squareOdd$ = squareOddValsPipeFunc(numbersObservable);
    squareOdd$.subscribe(n => this.squarepipeLogs.push(n));

    // Applying pipe on observable
    let squareOddObservable = numbersObservable.pipe(
      filter((val: number) => val % 2 !== 0),
      map(n => n * n)
    )

    squareOddObservable.subscribe(n => this.pipeLogss.push(n));
  }


}
