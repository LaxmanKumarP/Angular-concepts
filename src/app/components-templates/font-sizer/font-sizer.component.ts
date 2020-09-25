import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.css']
})
export class FontSizerComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter();
  dec() { this.reSize(-1); }
  inc() { this.reSize(+1) }

  reSize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
