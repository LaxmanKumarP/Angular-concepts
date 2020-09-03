import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  template: `<p>{{title}}</p>
             <p>{{myHero}}</p>`
})
export class DisplayDataInTemplateComponent implements OnInit {

  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  constructor() { }

  ngOnInit(): void {
  }

}
