import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'super flexible', 'weather Changer', 'honest'];
  hero = {
    name: '',
    alterEgo: '',
    power: ''
  };

  onSubmit(heroForm) {
    console.log(this.hero);
  }
}
