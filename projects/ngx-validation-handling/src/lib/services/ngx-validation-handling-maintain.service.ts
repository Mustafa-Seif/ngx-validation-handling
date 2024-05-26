import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, NgForm, NgModel, ValidationErrors } from '@angular/forms';
import { NgxValidationHandlingService } from './ngx-validation-handling.service';

@Injectable({
    providedIn: 'root'
})
export class NgxValidationHandlingMaintainService {
    constructor(private ngxValidationHandlingService: NgxValidationHandlingService) { }
    getErrorMessage(controlName: string): string {
        const form = this.ngxValidationHandlingService.getForm();
        const validationMessages = this.ngxValidationHandlingService.getValidationMessages();
    
        if (!form) {
            return 'Invalid field';
        }
    
        let control: AbstractControl | NgModel | null = null;
    
        if (form instanceof FormGroup) {
            control = form.get(controlName);
        } else if (form instanceof NgForm) {
            control = form.controls[controlName] as unknown  as NgModel;
        }
    
        if (control) {
            if (control instanceof AbstractControl) {
                // Handling for reactive forms
                if (control.errors && control.touched) {
                    for (const errorKey in control.errors) {
                        if (control.errors.hasOwnProperty(errorKey)) {
                            return validationMessages[errorKey] || 'Invalid field';
                        }
                    }
                }
            } else if (control instanceof NgModel) {
                // Handling for template-driven forms
                if (control.invalid && (control.dirty || control.touched)) {
                    for (const errorKey in control.errors) {
                        if (control.errors.hasOwnProperty(errorKey)) {
                            return validationMessages[errorKey] || 'Invalid field';
                        }
                    }
                }
            }
        }
        
        return '';
    }
    
    
}
