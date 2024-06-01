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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxValidationHandlingMaintainService, deps: [{ token: i1.NgxValidationHandlingService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxValidationHandlingMaintainService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxValidationHandlingMaintainService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxValidationHandlingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRpb24taGFuZGxpbmctbWFpbnRhaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0aW9uLWhhbmRsaW5nL3NyYy9saWIvc2VydmljZXMvbmd4LXZhbGlkYXRpb24taGFuZGxpbmctbWFpbnRhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7OztBQU8vRixNQUFNLE9BQU8sb0NBQW9DO0lBQzdDLFlBQW9CLDRCQUEwRDtRQUExRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQUksQ0FBQztJQUNuRixlQUFlLENBQUMsV0FBbUIsRUFBQyxrQkFBeUM7UUFDekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFckYsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sZUFBZSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxPQUFPLEdBQXFDLElBQUksQ0FBQztRQUVyRCxJQUFJLElBQUksWUFBWSxTQUFTLEVBQUU7WUFDM0IsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLElBQUksWUFBWSxNQUFNLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUF3QixDQUFDO1NBQy9EO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLE9BQU8sWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLDhCQUE4QjtnQkFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ25DLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDbkMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDekMsSUFBSSxrQkFBa0IsRUFBRTtnQ0FDcEIsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs2QkFDNUU7NEJBQ0gsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUM7eUJBQzFEO3FCQUNKO2lCQUNKO2FBQ0o7aUJBQU0sSUFBSSxPQUFPLFlBQVksT0FBTyxFQUFFO2dCQUNuQyxxQ0FBcUM7Z0JBQ3JDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN2RCxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ25DLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQ3pDLElBQUksa0JBQWtCLEVBQUU7Z0NBQ3BCLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7NkJBQzVFOzRCQUNILE9BQU8sa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDO3lCQUMxRDtxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7K0dBL0NRLG9DQUFvQzttSEFBcEMsb0NBQW9DLGNBRmpDLE1BQU07OzRGQUVULG9DQUFvQztrQkFIaEQsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwLCBOZ0Zvcm0sIE5nTW9kZWwsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRpb25IYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuL25neC12YWxpZGF0aW9uLWhhbmRsaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9WYWxpZGF0aW9uLWVycm9yLWhhbmRsZXIuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdGlvbkhhbmRsaW5nTWFpbnRhaW5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4VmFsaWRhdGlvbkhhbmRsaW5nU2VydmljZTogTmd4VmFsaWRhdGlvbkhhbmRsaW5nU2VydmljZSkgeyB9XHJcbiAgICBnZXRFcnJvck1lc3NhZ2UoY29udHJvbE5hbWU6IHN0cmluZyxjdXN0b21FcnJvckhhbmRsZXI6VmFsaWRhdGlvbkVycm9ySGFuZGxlcik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMubmd4VmFsaWRhdGlvbkhhbmRsaW5nU2VydmljZS5nZXRGb3JtKCk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VzID0gdGhpcy5uZ3hWYWxpZGF0aW9uSGFuZGxpbmdTZXJ2aWNlLmdldFZhbGlkYXRpb25NZXNzYWdlcygpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKCFmb3JtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBmaWVsZCc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfCBudWxsID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIGlmIChmb3JtIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wgPSBmb3JtLmdldChjb250cm9sTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtIGluc3RhbmNlb2YgTmdGb3JtKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wgPSBmb3JtLmNvbnRyb2xzW2NvbnRyb2xOYW1lXSBhcyB1bmtub3duICBhcyBOZ01vZGVsO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGluZyBmb3IgcmVhY3RpdmUgZm9ybXNcclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVycm9ycyAmJiBjb250cm9sLnRvdWNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVycm9yS2V5IGluIGNvbnRyb2wuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcktleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21FcnJvckhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tRXJyb3JIYW5kbGVyKGNvbnRyb2xOYW1lLCBlcnJvcktleSwgY29udHJvbC5lcnJvcnNbZXJyb3JLZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlc1tlcnJvcktleV0gfHwgJ0ludmFsaWQgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBOZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGluZyBmb3IgdGVtcGxhdGUtZHJpdmVuIGZvcm1zXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVycm9yS2V5IGluIGNvbnRyb2wuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcktleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21FcnJvckhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tRXJyb3JIYW5kbGVyKGNvbnRyb2xOYW1lLCBlcnJvcktleSwgY29udHJvbC5lcnJvcnNbZXJyb3JLZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlc1tlcnJvcktleV0gfHwgJ0ludmFsaWQgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuIl19