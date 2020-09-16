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


  canSave = true;
  isUnchanged = false;
  isSpecial = false;

  classConditions =
    {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };


  constructor() { }

  ngOnInit(): void {
  }

  getVal() {
    return 1;
  }
  getHeroImg() {
    return this.heroImageUrl;
  }

}
