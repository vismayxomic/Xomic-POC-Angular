import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginLayoutComponent } from './before-login-layout.component';

describe('BeforeLoginLayoutComponent', () => {
  let component: BeforeLoginLayoutComponent;
  let fixture: ComponentFixture<BeforeLoginLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeLoginLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
