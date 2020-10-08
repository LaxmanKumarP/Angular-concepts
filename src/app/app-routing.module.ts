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
import { InputTestComponent } from './components-templates/input-test/input-test.component';
import { InteractionComponent } from './components-templates/interaction/interaction.component';
import { LifecycleHooksComponent } from './components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { LifeCycleViewHooksComponent } from './components-templates/life-cycle-view-hooks/life-cycle-view-hooks.component';
import { LifecycleContentHooksComponent } from './components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component';
import { PipesComponent } from './components-templates/pipes/pipes/pipes.component';

import { ObservablesDemoComponent } from './rx-demo/observables-demo/observables-demo.component';
import { SimpleserviceexampleComponent } from './rx-demo/simpleserviceexample/simpleserviceexample.component';
import { SubjectDemoComponent } from './rx-demo/subject-demo/subject-demo.component';


import { FormControlComponent } from './forms-demo/reactive/form-control/form-control.component';
import { FormGroupComponent } from './forms-demo/reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './forms-demo/reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './forms-demo/reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './forms-demo/reactive/form-array/form-array.component';
import { SuperHeroComponent } from './forms-demo/template-driven/super-hero/super-hero.component';




const routes: Routes = [{ path: 'index', component: IndexComponent },
{ path: 'components-templates/display-data-in-template', component: DisplayDataInTemplateComponent },
{ path: 'components-templates/display-data-in-template-url', component: DisplayDataInTemplateUrlComponent },
{ path: 'components-templates/template-syntax', component: TemplateSyntaxComponent },
{ path: 'components-templates/template-syntax/custom-events', component: CustomEventsComponent },
{ path: 'components-templates/template-syntax/two-way-binding', component: TwoWayBindingComponent },
{ path: 'components-templates/directives', component: DirectivesComponent },
{ path: 'components-templates/input-test', component: InputTestComponent },
{ path: 'components-templates/component-interaction', component: InteractionComponent },

{ path: 'components-templates/lifecycle-hooks', component: LifecycleHooksComponent },
{ path: 'components-templates/lifecycle-hooks/view-hooks', component: LifeCycleViewHooksComponent },
{ path: 'components-templates/lifecycle-hooks/content-hooks', component: LifecycleContentHooksComponent },

{ path: 'components-templates/pipes', component: PipesComponent },

{ path: 'rxjs/observables-demo', component: ObservablesDemoComponent },
{ path: 'rxjs/service-demo', component: SimpleserviceexampleComponent },
{ path: 'rxjs/subjects-demo', component: SubjectDemoComponent },


{ path: 'forms/reactive/form-control', component: FormControlComponent },
{ path: 'forms/reactive/form-group', component: FormGroupComponent },
{ path: 'forms/reactive/nested-form-group', component: NestedFormGroupComponent },
{ path: 'forms/reactive/form-builder', component: FormBuilderComponent },
{ path: 'forms/reactive/form-array', component: FormArrayComponent },
{ path: 'forms/template-driven', component: SuperHeroComponent },

{ path: '', redirectTo: 'index', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
