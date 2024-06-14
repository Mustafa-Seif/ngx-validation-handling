import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { FormGroup, NgForm, AbstractControl, NgModel } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgxValidationHandlingService {
    setValidationHandling(form, ValidationMessages) {
        this.form = form;
        this.ValidationMessages = ValidationMessages || {};
    }
    getValidationMessages() {
        return this.ValidationMessages;
    }
    getForm() {
        return this.form;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class NgxValidationHandlingMaintainService {
    constructor(ngxValidationHandlingService) {
        this.ngxValidationHandlingService = ngxValidationHandlingService;
    }
    getErrorMessage(controlName, customErrorHandler) {
        const form = this.ngxValidationHandlingService.getForm();
        const validationMessages = this.ngxValidationHandlingService.getValidationMessages();
        if (!form) {
            return 'Invalid field';
        }
        let control = null;
        if (form instanceof FormGroup) {
            control = form.get(controlName);
        }
        else if (form instanceof NgForm) {
            control = form.controls[controlName];
        }
        if (control) {
            if (control instanceof AbstractControl) {
                // Handling for reactive forms
                if (control.errors && control.touched) {
                    for (const errorKey in control.errors) {
                        if (control.errors.hasOwnProperty(errorKey)) {
                            if (customErrorHandler) {
                                return customErrorHandler(controlName, errorKey, control.errors[errorKey]);
                            }
                            return validationMessages[errorKey] || 'Invalid field';
                        }
                    }
                }
            }
            else if (control instanceof NgModel) {
                // Handling for template-driven forms
                if (control.invalid && (control.dirty || control.touched)) {
                    for (const errorKey in control.errors) {
                        if (control.errors.hasOwnProperty(errorKey)) {
                            if (customErrorHandler) {
                                return customErrorHandler(controlName, errorKey, control.errors[errorKey]);
                            }
                            return validationMessages[errorKey] || 'Invalid field';
                        }
                    }
                }
            }
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingMaintainService, deps: [{ token: NgxValidationHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingMaintainService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingMaintainService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: NgxValidationHandlingService }] });

class NgxValidationHandlingComponent {
    constructor(ngValidationMessagesMaintainService) {
        this.ngValidationMessagesMaintainService = ngValidationMessagesMaintainService;
        this.fieldName = '';
        this.style = {};
    }
    get errorMessage() {
        return this.ngValidationMessagesMaintainService.getErrorMessage(this.controlName, this.customErrorHandler);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingComponent, deps: [{ token: NgxValidationHandlingMaintainService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.3", type: NgxValidationHandlingComponent, selector: "ngx-validation-handling", inputs: { controlName: "controlName", fieldName: "fieldName", style: "style", customErrorHandler: "customErrorHandler" }, ngImport: i0, template: `
    <ng-container *ngIf="controlName">
      <label [ngStyle]="style"  *ngIf="errorMessage !== ''" class="error-message">{{ fieldName?fieldName+' '+errorMessage: errorMessage }}</label>
    </ng-container>
  `, isInline: true, styles: [".error-message{color:red;font-size:12px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-validation-handling', template: `
    <ng-container *ngIf="controlName">
      <label [ngStyle]="style"  *ngIf="errorMessage !== ''" class="error-message">{{ fieldName?fieldName+' '+errorMessage: errorMessage }}</label>
    </ng-container>
  `, styles: [".error-message{color:red;font-size:12px}\n"] }]
        }], ctorParameters: () => [{ type: NgxValidationHandlingMaintainService }], propDecorators: { controlName: [{
                type: Input,
                args: [{ required: true }]
            }], fieldName: [{
                type: Input
            }], style: [{
                type: Input
            }], customErrorHandler: [{
                type: Input
            }] } });

class NgxValidationHandlingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingModule, declarations: [NgxValidationHandlingComponent], imports: [CommonModule], exports: [NgxValidationHandlingComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxValidationHandlingComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgxValidationHandlingComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-validation-handling
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxValidationHandlingComponent, NgxValidationHandlingModule, NgxValidationHandlingService };
//# sourceMappingURL=ngx-validation-handling.mjs.map
