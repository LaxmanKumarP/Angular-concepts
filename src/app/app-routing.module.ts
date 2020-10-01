import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './components-templates/display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './components-templates/directives/directives.component';


import { FormControlComponent } from './forms-demo/reactive/form-control/form-control.component';
import { FormGroupComponent } from './forms-demo/reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './forms-demo/reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './forms-demo/reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './forms-demo/reactive/form-array/form-array.component';




const routes: Routes = [{ path: 'index', component: IndexComponent },
{ path: 'components-templates/display-data-in-template', component: DisplayDataInTemplateComponent },
{ path: 'components-templates/display-data-in-template-url', component: DisplayDataInTemplateUrlComponent },
{ path: 'components-templates/template-syntax', component: TemplateSyntaxComponent },
{ path: 'components-templates/template-syntax/custom-events', component: CustomEventsComponent },
{ path: 'components-templates/template-syntax/two-way-binding', component: TwoWayBindingComponent },
{ path: 'components-templates/directives', component: DirectivesComponent },


{ path: 'forms/reactive/form-control', component: FormControlComponent },
{ path: 'forms/reactive/form-group', component: FormGroupComponent },
{ path: 'forms/reactive/nested-form-group', component: NestedFormGroupComponent },
{ path: 'forms/reactive/form-builder', component: FormBuilderComponent },
{ path: 'forms/reactive/form-array', component: FormArrayComponent },

{ path: '', redirectTo: 'index', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
