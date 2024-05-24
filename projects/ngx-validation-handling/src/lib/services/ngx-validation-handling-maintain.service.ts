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
        if (!form || !validationMessages) {
            return 'Invalid field';
        }
        const control = form.get(controlName);
        if (control && control.errors && control.touched) {
            for (const errorKey in control.errors) {
                if (control.errors.hasOwnProperty(errorKey)) {
                    return validationMessages[errorKey] || 'Invalid field';
                }
            }
        }
        return '';
    }
}
