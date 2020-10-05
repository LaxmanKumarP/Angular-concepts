import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  birthday = new Date(1995, 3, 15);

  name: string = 'keith c john';
  ngOnInit(): void {
    console.log(this.birthday);
  }

  newHero = {
    name: '',
    canFly: true
  };

  pushHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    }

    this.heros.push(heroObj);
    this.newHero.name = '';

  }

  concatHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    }

    this.heros = this.heros.concat(heroObj);
    this.newHero.name = '';

  }


  heros = [{ name: 'Windstorm', canFly: true },
  { name: 'Bambasto', canFly: false },
  { name: 'Magento', canFly: false },
  { name: 'Torando', canFly: true },];

}
