import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsDemoService {

  constructor() {
    this.emitNumbers();
  }

  numbers: Array<number> = [1, 2, 3, 4, 5];
  numbersObservable$: Observable<number> = new Observable(observer => {
    let id = 0;
    let intervalID = setInterval(() => {
      observer.next(this.numbers[id]);
      if (id === this.numbers.length - 1) {
        observer.complete();
        clearInterval(intervalID);
      } else {
        ++id;
      }
    }, 1000);
  });


  numbersSubject = new Subject<number>();
  emitNumbers() {
    let id = 0;
    let intervalID = setInterval(() => {
      this.numbersSubject.next(this.numbers[id]);
      if (id === this.numbers.length - 1) {
        this.numbersSubject.complete();
        clearInterval(intervalID);
      } else {
        ++id;
      }
    }, 1000);

  }
numbersSubjectObservable$ = this.numbersSubject.asObservable();
}
