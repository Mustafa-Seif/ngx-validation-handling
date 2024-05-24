import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidationHandlingComponent } from './ngx-validation-handling.component';

describe('NgValidationMessagesComponent', () => {
  let component: NgxValidationHandlingComponent;
  let fixture: ComponentFixture<NgxValidationHandlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxValidationHandlingComponent]
    });
    fixture = TestBed.createComponent(NgxValidationHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
