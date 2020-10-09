import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { SimpleserviceexampleComponent } from './simpleserviceexample/simpleserviceexample.component';
import { ComponentsTemplatesModule } from '../components-templates/components-templates.module';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { ColorfulTextComponent } from './colorful-text/colorful-text.component';
import { ColorInputComponent } from './color-input/color-input.component';
import { FormsModule } from '@angular/forms';
import { OperatorsDemoComponent } from './operators-demo/operators-demo.component';



@NgModule({
  declarations: [ObservablesDemoComponent, SimpleserviceexampleComponent, SubjectDemoComponent, ColorfulTextComponent, ColorInputComponent, OperatorsDemoComponent],
  imports: [
    CommonModule,
    ComponentsTemplatesModule,
    FormsModule
  ]
})
export class RxDemoModule { }
