import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginHeaderComponent } from './before-login-header.component';

describe('BeforeLoginHeaderComponent', () => {
  let component: BeforeLoginHeaderComponent;
  let fixture: ComponentFixture<BeforeLoginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeLoginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
