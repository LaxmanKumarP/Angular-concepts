import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('john doe');
  userName$: Observable<string> = this.userNameSubject.asObservable();

  updateUserName(userName: string) {
    this.userNameSubject.next(userName);
  }
}
