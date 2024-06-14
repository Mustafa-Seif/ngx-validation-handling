
#  Welcome to ngx-validation-handling👋

## `ngx-validation-handling is an Angular library that provides customizable, dynamic validation messages for both reactive and template-driven forms.`

  


## ✨Demo

 See [Demo](https://ngx-validation-handling.netlify.app/) page

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

## Versions
| Angular | ngx-validation-handling |
| :-------- | :-------------------- | 
| `>=18.0.0 <19.0.0` | `v4.x` |
| `>=17.0.0 <18.0.0` | `v3.x` |
| `>=16.0.0 <17.0.0` | `v2.x & v1.x` |

##

# 🚀Getting started
## Usage with reactive form 
### Step 1: install ngx-validation-handling

#### NPM
```bash
 npm i ngx-validation-handling --save
```
#### YARN
```bash
 yarn add ngx-validation-handling 
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

### Step 4: Use "NgxValidationHandlingService" to send your form and your validation messsages example:
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
  
 ### Step 5: In template use "ngx-validation-handling" component and send your from control name
  ```javascript
<ngx-validation-handling controlName="fName"></ngx-validation-handling>
```

## Usage with template-driven from

```javascript
import { Component } from '@angular/core';
import {NgxValidationHandlingService} from 'ngx-validation-handling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

```
 ### In your template use "ngx-validation-handling" component and send your from control name
  ```javascript
<ngx-validation-handling controlName="fName"></ngx-validation-handling>
```

## API Reference
### @Inputs
| Input | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `controlName` | `string` | **Required**. Takes your input formControlName |
| `fieldName` | `string` |  The name of your field |
| `className` | `string` |  Add your custom className |
| `style` | `{}` |  Add your custom styles |

### @Methods
| Input | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `customErrorHandler` | `ValidationErrorHandler` | Method used adds customized  validation error handlers |

### Example, how you can use "customErrorHandler"
#### in your component
```javascript
   customErrorHandler(controlName: string, errorName: string, errorValue: any): string {
    if (errorName === 'required') {
      return 'Custom required message';
    }
    if (errorName === 'minlength') {
      return 'Custom minimum length message';
    }
    if (errorName === 'maxlength') {
      return 'Custom maximum length message';
    }
    return '';
  }
  ```
  #### in your template
```javascript
  <ngx-validation-handling controlName="lName" [customErrorHandler]="customErrorHandler" ></ngx-validation-handling>
```




## 👤 Authors
 [@Mustafa-Seif](https://github.com/Mustafa-Seif)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-portfolio-rust-xi.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mustafa-seif-el-nasr-439ba0223/)



## 📝License

[MIT](https://github.com/Mustafa-Seif/ngx-validation-handling/blob/main/LICENSE)


## 🤝 Support

For support or any feedback, email mustafa.webdev7@gmail.com 
