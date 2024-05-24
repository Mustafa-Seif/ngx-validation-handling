import { Component, Input } from '@angular/core';
import { NgxValidationHandlingMaintainService } from '../../services/ngx-validation-handling-maintain.service';
@Component({
  selector: 'ngx-validation-handling',
  template: `
    <ng-container *ngIf="controlName">
      <label [ngStyle]="style"  *ngIf="errorMessage !== ''" class="error-message">{{ errorMessage }}</label>
    </ng-container>
  `,
  styles: [
    `
    .error-message {
      color: red;
      font-size: 12px;
    }
  `
  ],
})
export class NgxValidationHandlingComponent {
  @Input() controlName!: string;
  @Input() style!: any;

  constructor(private ngValidationMessagesMaintainService: NgxValidationHandlingMaintainService) { }

  get errorMessage(): string {
    return this.ngValidationMessagesMaintainService.getErrorMessage(this.controlName);
  }
}