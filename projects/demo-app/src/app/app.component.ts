import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgxValidationHandlingService} from 'ngx-validation-handling';
import { ValidationErrorHandler } from 'projects/ngx-validation-handling/src/lib/interfaces/Validation-error-handler.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form!:FormGroup;
  constructor(private fb:FormBuilder, private ngxValidationHandlingService:NgxValidationHandlingService){}
  ngOnInit(): void {
  this.form =  this.fb.group({
      fName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      lName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]]
   })
    this.ngxValidationHandlingService.setValidationHandling(this.form,
      {
        required: 'This field is required',
        minlength: 'Minimum length should be 3',
        maxlength: 'Maximum length should be 10'
      }
    );
  }
  customErrorHandler(controlName: string, errorName: string, errorValue: any): string {
    if (errorName === 'required') {
      return 'cccc';
    }
    if (errorName === 'minlength') {
      return 'Minimum length should be 3';
    }
    if (errorName === 'maxlength') {
      return 'Maximum length should be 10';
    }
    return '';
  }
}
