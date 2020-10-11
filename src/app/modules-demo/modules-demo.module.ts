import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerVsLazyLoadingComponent } from './eager-vs-lazy-loading/eager-vs-lazy-loading.component';
import { RouterModule } from '@angular/router';
import { LazyLoadingDemoComponent } from './lazy-loading-demo/lazy-loading-demo.component';


@NgModule({
  declarations: [EagerVsLazyLoadingComponent, LazyLoadingDemoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ModulesDemoModule { }
