import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxValidationHandlingService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: NgxValidationHandlingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: NgxValidationHandlingService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: NgxValidationHandlingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRpb24taGFuZGxpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0aW9uLWhhbmRsaW5nL3NyYy9saWIvc2VydmljZXMvbmd4LXZhbGlkYXRpb24taGFuZGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8zQyxNQUFNLE9BQU8sNEJBQTRCO0lBSXZDLHFCQUFxQixDQUFDLElBQXdCLEVBQUUsa0JBQXVDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUNELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOytHQWJVLDRCQUE0QjttSEFBNUIsNEJBQTRCLGNBRjNCLE1BQU07OzRGQUVQLDRCQUE0QjtrQkFIeEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1ZhbGlkYXRpb24tbWVzc2FnZXMuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRpb25IYW5kbGluZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZm9ybSE6IEZvcm1Hcm91cCB8IE5nRm9ybTtcclxuICBwcml2YXRlIFZhbGlkYXRpb25NZXNzYWdlcyE6IFZhbGlkYXRpb25NZXNzYWdlcztcclxuXHJcbiAgc2V0VmFsaWRhdGlvbkhhbmRsaW5nKGZvcm06IEZvcm1Hcm91cCB8IE5nRm9ybSwgVmFsaWRhdGlvbk1lc3NhZ2VzPzogVmFsaWRhdGlvbk1lc3NhZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgdGhpcy5WYWxpZGF0aW9uTWVzc2FnZXMgPSBWYWxpZGF0aW9uTWVzc2FnZXMgfHwge307XHJcbiAgfVxyXG4gIGdldFZhbGlkYXRpb25NZXNzYWdlcygpOiBWYWxpZGF0aW9uTWVzc2FnZXMge1xyXG4gICAgcmV0dXJuIHRoaXMuVmFsaWRhdGlvbk1lc3NhZ2VzO1xyXG4gIH1cclxuICBnZXRGb3JtKCk6IEZvcm1Hcm91cCB8IE5nRm9ybSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtO1xyXG4gIH1cclxufVxyXG4iXX0=