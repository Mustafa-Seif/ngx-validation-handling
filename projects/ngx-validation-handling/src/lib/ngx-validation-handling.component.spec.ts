import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidationHandlingComponent } from './ngx-validation-handling.component';

describe('NgxValidationHandlingComponent', () => {
  let component: NgxValidationHandlingComponent;
  let fixture: ComponentFixture<NgxValidationHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxValidationHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxValidationHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
