import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css']
})
export class HeroBioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('name') hero;
  @Output('deleteRequest') deleteHeroEvent = new EventEmitter();
  deleteHero(hero) {
    this.deleteHeroEvent.emit(hero);
  }

}
