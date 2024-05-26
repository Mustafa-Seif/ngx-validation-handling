import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ValidationMessages } from '../interfaces/Validation-messages.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxValidationHandlingService {
  private form!: FormGroup | NgForm;
  private ValidationMessages!: ValidationMessages;

  setValidationHandling(form: FormGroup | NgForm, ValidationMessages?: ValidationMessages): void {
    this.form = form;
    this.ValidationMessages = ValidationMessages || {};
  }
  getValidationMessages(): ValidationMessages {
    return this.ValidationMessages;
  }
  getForm(): FormGroup | NgForm {
    return this.form;
  }
}
