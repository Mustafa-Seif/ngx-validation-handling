
#  Welcome to ngx-validation-handling👋

## `ngx-validation-handling is an Angular library that provides customizable, dynamic validation messages for both reactive and template-driven forms.`

  


## ✨Demo

 See [Demo](https://github.com/Mustafa-Seif) page

## Features

- 🛠 Customizable Validation Messages: Tailor the validation messages to suit your application's needs.
- 🔄 Dynamic Error Message Retrieval: Automatically fetch and display error messages.
- 📋 Easy Integration with Reactive Forms: Seamlessly integrate with Angular's - - reactive forms.
- 📝 Template-Driven Form Support: Supports template-driven forms for flexible validation handling.
- 🌐 Localization and Internationalization (i18n): Easily localize validation messages for different languages.
- 🎨 Styling and Customization: Style the validation messages to match your application's look and feel.
- ⏲ Debounced Error Display: Avoid flashing error messages with debounced display.
- 🔗 Integration with Third-Party Libraries: Compatible with other Angular libraries.
- ⏳ Async Validator Support: Handle asynchronous validators effectively.
- ⚙ Configurable Error Display Strategies: Customize how and when error messages are displayed.
- 🛡 Custom Validation Error Handlers: Define your own handlers for validation       errors.
- 📝 Form-Wide Error Summary: Provide a summary of errors for the entire form.



# 🚀Getting started
## Usage in reactive form 
### Step 1: install ngx-validation-handling

```bash
 npm i ngx-validation-handling --save
```


### Step 2: Import the "NgxValidationHandlingModule"
```javascript
import { NgxValidationHandlingModule } from 'ngx-validation-handling';
@NgModule({
  declarations: [AppComponent],
  imports: [NgxValidationHandlingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
### Step 3: Import the "NgxValidationHandlingService" in your component
```javascript
import { Component } from '@angular/core';
import {NgxValidationHandlingService} from 'ngx-validation-handling';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
  ...
  private ngxValidationHandlingService:NgxValidationHandlingService
  ){}

}
```

### Step 4: Use NgxValidationHandlingService to send your form and your validation messsages example:
```javascript
  ngOnInit(): void {
    // After intit your form
    this.ngxValidationHandlingService.setValidationHandling(this.form,
      {
        required: 'This field is required',
        minlength: 'Minimum length should be 3',
        maxlength: 'Maximum length should be 10'
      }
    );
  }
  ```
  
 ### Step 5: In template use ngx-validation-handling component and send your from control name
  ```javascript
<ngx-validation-handling controlName="fName"></ngx-validation-handling>
```

## Usage in template-driven 

```javascript
 @ViewChild('form') form!:NgForm;

constructor(
 private ngxValidationHandlingService:NgxValidationHandlingService
 ){}

 ngAfterViewInit(): void {
    this.ngxValidationHandlingService.setValidationHandling(this.form,
      {
        required: 'This field is required',
        minlength: 'Minimum length should be 3',
        maxlength: 'Maximum length should be 10'
      }
    );
 }

```


## API Reference

| Input | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `controlName` | `string` | **Required**. Takes your input formControlName |
| `customErrorHandler` | `ValidationErrorHandler` | Function that used add custom validation error handlers |
| `fieldName` | `string` |  The name of your field |
| `style` | `{}` |  Add your custom styles |





## 👤 Authors
 [@Mustafa-Seif](https://github.com/Mustafa-Seif)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-portfolio-rust-xi.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mustafa-seif-el-nasr-439ba0223/)



## 📝License

[MIT](https://github.com/Mustafa-Seif/ngx-validation-handling/blob/main/LICENSE)


## 🤝 Support

For support or any feedback, email mustafa.webdev7@gmail.com 


## 💡 Keywords

 - [Angular](https://www.npmjs.com/search?q=Angular)
 - [Reactive Forms](https://www.npmjs.com/search?q=Reactive&Forms)
 - [Template-Driven Forms](https://www.npmjs.com/search?q=Template-Driven&Forms)
 - [Validation](https://www.npmjs.com/search?q=Validation)
 - [custom Validation Messages](https://www.npmjs.com/search?q=custom&Validation&Messages)
 - [Form Validation](https://www.npmjs.com/search?q=Form&Validation)
 - [Form Error Handling](https://www.npmjs.com/search?q=Form&Error&Handling)
 - [Dynamic Validation](https://www.npmjs.com/search?q=Dynamic&Validation)
