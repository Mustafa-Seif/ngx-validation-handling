import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxValidationHandlingModule, NgxValidationHandlingService } from 'ngx-validation-handling';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxValidationHandlingModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
