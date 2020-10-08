import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorChangeService {

  private colorSubject = new Subject<string>();

  color$ = this.colorSubject.asObservable();

  emitColor(color) {
    this.colorSubject.next(color);
  }


  constructor() { }
}
