import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginLayoutComponent } from './after-login-layout.component';

describe('AfterLoginLayoutComponent', () => {
  let component: AfterLoginLayoutComponent;
  let fixture: ComponentFixture<AfterLoginLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
