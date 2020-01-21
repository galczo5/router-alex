import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBackgroundComponent } from './nav-background.component';

describe('NavBackgroundComponent', () => {
  let component: NavBackgroundComponent;
  let fixture: ComponentFixture<NavBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
