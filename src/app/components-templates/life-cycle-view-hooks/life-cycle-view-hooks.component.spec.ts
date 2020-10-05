import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleViewHooksComponent } from './life-cycle-view-hooks.component';

describe('LifeCycleViewHooksComponent', () => {
  let component: LifeCycleViewHooksComponent;
  let fixture: ComponentFixture<LifeCycleViewHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleViewHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleViewHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
