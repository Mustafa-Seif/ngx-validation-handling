import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationMessages } from '../interfaces/Validation-messages.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxValidationHandlingService {
  private form!: FormGroup;
  private ValidationMessages!: ValidationMessages;

  setValidationHandling(form: FormGroup, ValidationMessages?: ValidationMessages): void {
    this.form = form;
    this.ValidationMessages = ValidationMessages || {};
  }
  getValidationMessages(): ValidationMessages {
    return this.ValidationMessages;
  }
  getForm(): FormGroup {
    return this.form;
  }
}
