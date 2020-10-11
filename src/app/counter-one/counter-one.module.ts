import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { IncreaseCountComponent } from './increase-count/increase-count.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [CounterHomeComponent, DisplayCountComponent, IncreaseCountComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CounterOneModule { }
