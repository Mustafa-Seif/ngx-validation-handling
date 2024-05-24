import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { NgxValidationHandlingService } from './ngx-validation-handling.service';
@Injectable({
    providedIn: 'root'
})
export class NgxValidationHandlingMaintainService {
    constructor(private ngxValidationHandlingService: NgxValidationHandlingService) { }
    getErrorMessage(controlName: string): string {
        const form = this.ngxValidationHandlingService.getForm();
        const validationMessages = this.ngxValidationHandlingService.getValidationMessages();
        const control = form.get(controlName);
        if (control && control.errors) {
            const errors: ValidationErrors = control.errors;
            for (const error in errors) {
                if (errors.hasOwnProperty(error)) {
                    return validationMessages[error] || 'Invalid field';
                }
            }
        }
        return '';
    }
}
