import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';
import { CounterOneModule } from './counter-one/counter-one.module';
import { CounterTwoModule } from './counter-two/counter-two.module';
import { CoreModule } from './core/core.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsTemplatesModule,
    FormsModule,
    RxDemoModule,
    ReactiveFormsModule,
    FormsDemoModule,
    CounterOneModule,
    CounterTwoModule,
    CoreModule
    // ModulesDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
