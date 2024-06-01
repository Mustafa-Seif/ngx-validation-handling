import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/ngx-validation-handling-maintain.service";
import * as i2 from "@angular/common";
export class NgxValidationHandlingComponent {
    constructor(ngValidationMessagesMaintainService) {
        this.ngValidationMessagesMaintainService = ngValidationMessagesMaintainService;
        this.fieldName = '';
        this.style = {};
    }
    get errorMessage() {
        return this.ngValidationMessagesMaintainService.getErrorMessage(this.controlName, this.customErrorHandler);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxValidationHandlingComponent, deps: [{ token: i1.NgxValidationHandlingMaintainService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxValidationHandlingComponent, selector: "ngx-validation-handling", inputs: { controlName: "controlName", fieldName: "fieldName", style: "style", customErrorHandler: "customErrorHandler" }, ngImport: i0, template: `
    <ng-container *ngIf="controlName">
      <label [ngStyle]="style"  *ngIf="errorMessage !== ''" class="error-message">{{ fieldName?fieldName+' '+errorMessage: errorMessage }}</label>
    </ng-container>
  `, isInline: true, styles: [".error-message{color:red;font-size:12px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxValidationHandlingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-validation-handling', template: `
    <ng-container *ngIf="controlName">
      <label [ngStyle]="style"  *ngIf="errorMessage !== ''" class="error-message">{{ fieldName?fieldName+' '+errorMessage: errorMessage }}</label>
    </ng-container>
  `, styles: [".error-message{color:red;font-size:12px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NgxValidationHandlingMaintainService }]; }, propDecorators: { controlName: [{
                type: Input,
                args: [{ required: true }]
            }], fieldName: [{
                type: Input
            }], style: [{
                type: Input
            }], customErrorHandler: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRpb24taGFuZGxpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRpb24taGFuZGxpbmcvc3JjL2xpYi9jb21wb25lbnRzL25neC12YWxpZGF0aW9uLWhhbmRsaW5nL25neC12YWxpZGF0aW9uLWhhbmRsaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQW1CakQsTUFBTSxPQUFPLDhCQUE4QjtJQU16QyxZQUFvQixtQ0FBeUU7UUFBekUsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFzQztRQUpwRixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBOEIsRUFBRSxDQUFDO0lBR2tELENBQUM7SUFFbEcsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsbUNBQW1DLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUcsQ0FBQzsrR0FWVSw4QkFBOEI7bUdBQTlCLDhCQUE4Qix5TEFkL0I7Ozs7R0FJVDs7NEZBVVUsOEJBQThCO2tCQWhCMUMsU0FBUzsrQkFDRSx5QkFBeUIsWUFDekI7Ozs7R0FJVDsySEFXMEIsV0FBVztzQkFBckMsS0FBSzt1QkFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ2hCLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGlvbkhhbmRsaW5nTWFpbnRhaW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmd4LXZhbGlkYXRpb24taGFuZGxpbmctbWFpbnRhaW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckhhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL1ZhbGlkYXRpb24tZXJyb3ItaGFuZGxlci5pbnRlcmZhY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC12YWxpZGF0aW9uLWhhbmRsaW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2xOYW1lXCI+XHJcbiAgICAgIDxsYWJlbCBbbmdTdHlsZV09XCJzdHlsZVwiICAqbmdJZj1cImVycm9yTWVzc2FnZSAhPT0gJydcIiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyBmaWVsZE5hbWU/ZmllbGROYW1lKycgJytlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9fTwvbGFiZWw+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0aW9uSGFuZGxpbmdDb21wb25lbnQge1xyXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIGNvbnRyb2xOYW1lITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpZWxkTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBjdXN0b21FcnJvckhhbmRsZXIhOiBWYWxpZGF0aW9uRXJyb3JIYW5kbGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nVmFsaWRhdGlvbk1lc3NhZ2VzTWFpbnRhaW5TZXJ2aWNlOiBOZ3hWYWxpZGF0aW9uSGFuZGxpbmdNYWludGFpblNlcnZpY2UpIHsgfVxyXG5cclxuICBnZXQgZXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ1ZhbGlkYXRpb25NZXNzYWdlc01haW50YWluU2VydmljZS5nZXRFcnJvck1lc3NhZ2UodGhpcy5jb250cm9sTmFtZSx0aGlzLmN1c3RvbUVycm9ySGFuZGxlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==