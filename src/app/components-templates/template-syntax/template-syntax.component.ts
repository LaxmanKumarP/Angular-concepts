import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  currentHero = {
    name: "Steven ",
    power: 200
  };

  heroImageUrl = './assets/images/hero.jpg';
  heroImageUrl1 = './assets/images/hero3.jpg';
  formNotChanged = true;
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  noOfColumns = 2;

  canSave = true;
  isUnchanged = false;
  isSpecial = false;
  badCurly = 'different checking';
  special = true;

  nullHero = null;
  classConditions =
    {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };
  currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px'
  };


  constructor() { }

  ngOnInit(): void {
    console.log(this.noOfColumns)
  }

  getVal() {
    return 1;
  }
  getHeroImg() {
    return this.heroImageUrl;
  }

  onSave(event) {
    console.log(event);
  }

}
