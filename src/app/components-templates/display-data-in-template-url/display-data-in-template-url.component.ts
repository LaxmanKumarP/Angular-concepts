import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template-url',
  templateUrl: './display-data-in-template-url.component.html',
  styleUrls: ['./display-data-in-template-url.component.css']
})
export class DisplayDataInTemplateUrlComponent implements OnInit {
  title: string;
  myHero: string;
  heros: string[] = ['superman', 'batman', 'wonderman', 'hyperman'];
  constructor() {
    this.title = 'Tours of heros';
    this.myHero = 'super power';
  }

  ngOnInit(): void {
  }

}
