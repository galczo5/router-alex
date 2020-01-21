import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContent1Component } from './example-content1.component';

describe('ExampleContent1Component', () => {
  let component: ExampleContent1Component;
  let fixture: ComponentFixture<ExampleContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
