import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-cycle',
  templateUrl: './user-cycle.component.html',
  styleUrls: ['./user-cycle.component.css']
})
export class UserCycleComponent implements OnInit {

  constructor() {
    console.log(`1. Input properties not avilable in the constructor - ${this.user}`);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`2. component onchanges`);
    console.log(`Input properties first avilable in the ngonchanges`);
    console.log(changes);
    console.log(this.user);


  }
  ngOnInit(): void {
    console.log(`3. component created`);
  }

  ngDoCheck() {
    console.log(`4. component docheck`);
    console.log(this.user.name);
  }
  @Input() user;
}
