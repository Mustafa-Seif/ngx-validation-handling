import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationMessages } from '../interfaces/Validation-messages.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxValidationHandlingService {
  private form!: FormGroup;
  private ValidationMessages!: ValidationMessages;

  setValidationMessages(form: FormGroup, ValidationMessages?: ValidationMessages): void {
    this.form = form;
    this.ValidationMessages = ValidationMessages || {
      required: 'This field is required',
      minlength: 'The value is too short',
      maxlength: 'The value is too long',
      email: 'Invalid email address',
    };
  }
  getValidationMessages(): ValidationMessages {
    return this.ValidationMessages;
  }
  getForm(): FormGroup {
    return this.form;
  }
}
