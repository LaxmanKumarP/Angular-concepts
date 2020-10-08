import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleserviceexampleComponent } from './simpleserviceexample.component';

describe('SimpleserviceexampleComponent', () => {
  let component: SimpleserviceexampleComponent;
  let fixture: ComponentFixture<SimpleserviceexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleserviceexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleserviceexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
