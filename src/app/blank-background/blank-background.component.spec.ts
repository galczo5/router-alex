import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankBackgroundComponent } from './blank-background.component';

describe('BlankBackgroundComponent', () => {
  let component: BlankBackgroundComponent;
  let fixture: ComponentFixture<BlankBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
