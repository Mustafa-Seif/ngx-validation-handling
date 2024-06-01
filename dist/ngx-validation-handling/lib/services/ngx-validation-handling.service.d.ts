import { FormGroup, NgForm } from '@angular/forms';
import { ValidationMessages } from '../interfaces/Validation-messages.interface';
import * as i0 from "@angular/core";
export declare class NgxValidationHandlingService {
    private form;
    private ValidationMessages;
    setValidationHandling(form: FormGroup | NgForm, ValidationMessages?: ValidationMessages): void;
    getValidationMessages(): ValidationMessages;
    getForm(): FormGroup | NgForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxValidationHandlingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxValidationHandlingService>;
}
