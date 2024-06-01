import { NgxValidationHandlingService } from './ngx-validation-handling.service';
import { ValidationErrorHandler } from '../interfaces/Validation-error-handler.interface';
import * as i0 from "@angular/core";
export declare class NgxValidationHandlingMaintainService {
    private ngxValidationHandlingService;
    constructor(ngxValidationHandlingService: NgxValidationHandlingService);
    getErrorMessage(controlName: string, customErrorHandler: ValidationErrorHandler): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxValidationHandlingMaintainService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxValidationHandlingMaintainService>;
}
