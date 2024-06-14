import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-validation-handling.service";
export class NgxValidationHandlingMaintainService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingMaintainService, deps: [{ token: i1.NgxValidationHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingMaintainService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxValidationHandlingMaintainService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.NgxValidationHandlingService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRpb24taGFuZGxpbmctbWFpbnRhaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0aW9uLWhhbmRsaW5nL3NyYy9saWIvc2VydmljZXMvbmd4LXZhbGlkYXRpb24taGFuZGxpbmctbWFpbnRhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7OztBQU8vRixNQUFNLE9BQU8sb0NBQW9DO0lBQzdDLFlBQW9CLDRCQUEwRDtRQUExRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQUksQ0FBQztJQUNuRixlQUFlLENBQUMsV0FBbUIsRUFBQyxrQkFBeUM7UUFDekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFckYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1IsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQztRQUVELElBQUksT0FBTyxHQUFxQyxJQUFJLENBQUM7UUFFckQsSUFBSSxJQUFJLFlBQVksU0FBUyxFQUFFLENBQUM7WUFDNUIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUFNLElBQUksSUFBSSxZQUFZLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBd0IsQ0FBQztRQUNoRSxDQUFDO1FBRUQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksT0FBTyxZQUFZLGVBQWUsRUFBRSxDQUFDO2dCQUNyQyw4QkFBOEI7Z0JBQzlCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3BDLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7NEJBQzFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDN0UsQ0FBQzs0QkFDSCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQzt3QkFDM0QsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO2lCQUFNLElBQUksT0FBTyxZQUFZLE9BQU8sRUFBRSxDQUFDO2dCQUNwQyxxQ0FBcUM7Z0JBQ3JDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQ3hELEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7NEJBQzFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDN0UsQ0FBQzs0QkFDSCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQzt3QkFDM0QsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs4R0EvQ1Esb0NBQW9DO2tIQUFwQyxvQ0FBb0MsY0FGakMsTUFBTTs7MkZBRVQsb0NBQW9DO2tCQUhoRCxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXAsIE5nRm9ybSwgTmdNb2RlbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGlvbkhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4vbmd4LXZhbGlkYXRpb24taGFuZGxpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckhhbmRsZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1ZhbGlkYXRpb24tZXJyb3ItaGFuZGxlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0aW9uSGFuZGxpbmdNYWludGFpblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hWYWxpZGF0aW9uSGFuZGxpbmdTZXJ2aWNlOiBOZ3hWYWxpZGF0aW9uSGFuZGxpbmdTZXJ2aWNlKSB7IH1cclxuICAgIGdldEVycm9yTWVzc2FnZShjb250cm9sTmFtZTogc3RyaW5nLGN1c3RvbUVycm9ySGFuZGxlcjpWYWxpZGF0aW9uRXJyb3JIYW5kbGVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5uZ3hWYWxpZGF0aW9uSGFuZGxpbmdTZXJ2aWNlLmdldEZvcm0oKTtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZXMgPSB0aGlzLm5neFZhbGlkYXRpb25IYW5kbGluZ1NlcnZpY2UuZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoIWZvcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGZpZWxkJztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB8IG51bGwgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGZvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgY29udHJvbCA9IGZvcm0uZ2V0KGNvbnRyb2xOYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvcm0gaW5zdGFuY2VvZiBOZ0Zvcm0pIHtcclxuICAgICAgICAgICAgY29udHJvbCA9IGZvcm0uY29udHJvbHNbY29udHJvbE5hbWVdIGFzIHVua25vd24gIGFzIE5nTW9kZWw7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBBYnN0cmFjdENvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsaW5nIGZvciByZWFjdGl2ZSBmb3Jtc1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wudG91Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXJyb3JLZXkgaW4gY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUVycm9ySGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21FcnJvckhhbmRsZXIoY29udHJvbE5hbWUsIGVycm9yS2V5LCBjb250cm9sLmVycm9yc1tlcnJvcktleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VzW2Vycm9yS2V5XSB8fCAnSW52YWxpZCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIE5nTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsaW5nIGZvciB0ZW1wbGF0ZS1kcml2ZW4gZm9ybXNcclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXJyb3JLZXkgaW4gY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUVycm9ySGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21FcnJvckhhbmRsZXIoY29udHJvbE5hbWUsIGVycm9yS2V5LCBjb250cm9sLmVycm9yc1tlcnJvcktleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VzW2Vycm9yS2V5XSB8fCAnSW52YWxpZCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG4iXX0=