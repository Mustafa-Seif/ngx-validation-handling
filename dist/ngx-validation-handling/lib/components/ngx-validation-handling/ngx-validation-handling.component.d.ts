import { NgxValidationHandlingMaintainService } from '../../services/ngx-validation-handling-maintain.service';
import { ValidationErrorHandler } from '../../interfaces/Validation-error-handler.interface';
import * as i0 from "@angular/core";
export declare class NgxValidationHandlingComponent {
    private ngValidationMessagesMaintainService;
    controlName: string;
    fieldName: string;
    style: {
        [key: string]: string;
    };
    customErrorHandler: ValidationErrorHandler;
    constructor(ngValidationMessagesMaintainService: NgxValidationHandlingMaintainService);
    get errorMessage(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxValidationHandlingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxValidationHandlingComponent, "ngx-validation-handling", never, { "controlName": { "alias": "controlName"; "required": true; }; "fieldName": { "alias": "fieldName"; "required": false; }; "style": { "alias": "style"; "required": false; }; "customErrorHandler": { "alias": "customErrorHandler"; "required": false; }; }, {}, never, never, false, never>;
}
