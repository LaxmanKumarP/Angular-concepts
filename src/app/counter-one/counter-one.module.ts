import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { IncreaseCountComponent } from './increase-count/increase-count.component';
import { RouterModule } from '@angular/router';
import { CountingService } from './counting.service';




@NgModule({
  declarations: [CounterHomeComponent, DisplayCountComponent, IncreaseCountComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DisplayCountComponent, IncreaseCountComponent],
  providers: [CountingService]
})
export class CounterOneModule {
  // static forRoot(): ModuleWithProviders<CounterOneModule> {
  //   return {
  //     NgModule: CounterOneModule,
  //     providers: [CountingService]
  //   }
  // }
}

