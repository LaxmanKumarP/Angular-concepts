import { Component, OnInit } from '@angular/core';
import { Subject, Observable, from, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { SubjectsDemoService } from '../subjects-demo.service';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];
  namesSubjectLogs: string[] = [];
  regularSubjectLogs: string[] = [];
  behaviourSubjectLogs: string[] = [];
  replaySubjectLogs: string[] = [];
  asyncSubjectLogs: string[] = [];
  constructor(private SubjectsDemoService: SubjectsDemoService) { }

  ngOnInit(): void {
    let initTime = Date.now()
    // Observable subscribers
    this.SubjectsDemoService.numbersObservable$.subscribe(n => {
      this.observableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer1: ${n}`);
    });
    setTimeout(() => {
      this.SubjectsDemoService.numbersObservable$.subscribe(n => {
        this.observableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer2: ${n}`);
      })
    }, 1500);


    // subject subscribers
    this.SubjectsDemoService.numbersSubject.subscribe(n => {
      this.subjectLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer1: ${n}`);
    });

    setTimeout(() => {
      this.SubjectsDemoService.numbersSubject.subscribe(n => {
        this.subjectLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: Observer2: ${n}`);
      })
    }, 1500);


    // observable created from subject subscribers
    this.SubjectsDemoService.numbersSubjectObservable$.subscribe(n => {
      this.subjectObservableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: observer1: ${n}`);
    })

    setTimeout(() => {
      this.SubjectsDemoService.numbersSubjectObservable$.subscribe(n => {
        this.subjectObservableLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: observer2: ${n}`);
      })
    }, 1500);

    // subject as both observable and observer

    let names: Array<string> = ['john', 'andy', 'benjmin'];
    let namesSubject: Subject<string> = new Subject<string>();

    namesSubject.subscribe(n => {
      this.namesSubjectLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: observer1: ${n}`);
    })

    namesSubject.subscribe(n => {
      this.namesSubjectLogs.push(`At ${((Date.now() - initTime) / 1000).toFixed(1)} seconds: observer2: ${n}`);
    })

    let namesObservable: Observable<string> = from(names);
    namesObservable.subscribe(namesSubject);

    // Subject types
    // Regular Subject

    let regularSubject = new Subject();

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push(`observer1  ${v}`)
    });

    regularSubject.next(1);
    regularSubject.next(2);

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push(`observer2  ${v}`)
    });

    regularSubject.next(3);
    regularSubject.next(4);

    // behaviour subjects
    let behaviorSubject = new BehaviorSubject(0);
    behaviorSubject.subscribe({
      next: (v) => this.behaviourSubjectLogs.push(`observer1: ${v}`)
    })

    behaviorSubject.next(1);
    behaviorSubject.next(2);
    behaviorSubject.subscribe({
      next: (v) => this.behaviourSubjectLogs.push(`observer2: ${v}`)
    })

    behaviorSubject.next(3);

    // Replay Subject
    let replaySubject = new ReplaySubject();
    replaySubject.subscribe({
      next: (v) => this.replaySubjectLogs.push(`observer1: ${v}`)
    })

    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.next(4);
    replaySubject.subscribe({
      next: (v) => this.replaySubjectLogs.push(`observer2: ${v}`)
    })

    replaySubject.next(5);

    // Async Subject
    let asyncSubject = new AsyncSubject();
    asyncSubject.subscribe({
      next: (v) => this.asyncSubjectLogs.push(`observer1: ${v}`)
    })
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);

    asyncSubject.subscribe({
      next: (v) => this.asyncSubjectLogs.push(`observer2: ${v}`)
    })
    asyncSubject.next(5);
    asyncSubject.complete();



  }




}
