import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color: string = "green";
  currentHero = { name: 'john' };
  nullHero = null;
  condition = false;
  heros = [{ "id": 1, "name": "vyky", "power": 2612 },
  { "id": 2, "name": "vernice", "power": 7036 },
  { "id": 3, "name": "chrissie", "power": 3331 },
  { "id": 4, "name": "tana", "power": 5158 },
  { "id": 5, "name": "rawley", "power": 8948 }];

  differentHeroNames = [{ "id": 1, "name": "Ram", "power": 2612 },
  { "id": 2, "name": "Laxman", "power": 7036 },
  { "id": 3, "name": "Bharat", "power": 3331 },
  { "id": 4, "name": "Shatrugna", "power": 5158 },
  { "id": 5, "name": "Hanuman", "power": 8948 }];

  differentHeroIds = [{ "id": 11, "name": "Ram", "power": 2612 },
  { "id": 12, "name": "Laxman", "power": 7036 },
  { "id": 13, "name": "Bharat", "power": 3331 },
  { "id": 14, "name": "Shatrugna", "power": 5158 },
  { "id": 15, "name": "Hanuman", "power": 8948 }];

  trackByHeros(index: number, hero): number {
    return hero.id;
  }

  updateWithDifferentHeroNames() {
    this.heros = this.differentHeroNames;
  }

  updateWithDifferentHeroIds() {
    this.heros = this.differentHeroIds;
  }
}
