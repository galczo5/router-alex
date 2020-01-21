import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContent2Component } from './example-content2.component';

describe('ExampleContent2Component', () => {
  let component: ExampleContent2Component;
  let fixture: ComponentFixture<ExampleContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
