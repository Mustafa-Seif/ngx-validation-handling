
#  Welcome to readme-md-generator👋
## `ngx-validation-handling is an Angular library that provides customizable, dynamic validation messages for both reactive and template-driven forms.`

  


## Demo

✨ See [Demo](https://github.com/Mustafa-Seif) page

## Features

- Customizable Validation Messages
- Dynamic Error Message Retrieval
- Easy Integration with Reactive Forms
- Template-Driven Form Support
- Localization and Internationalization (i18n)
- Styling and Customization
- Debounced Error Display
- Integration with Third-Party Libraries
- Async Validator Support
- Configurable Error Display Strategies
- Custom Validation Error Handlers
- Form-Wide Error Summary



# 🚀Getting started
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
  form!:FormGroup;
  constructor(
  private fb:FormBuilder,
  private ngxValidationHandlingService:NgxValidationHandlingService
  ){}

}
```

### Step 4: Use NgxValidationHandlingService to send your form and your validation messsages example:
```javascript
  ngOnInit(): void {
    intitForm();
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


## API Reference

| Input | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `controlName` | `string` | **Required**. Takes your input formControlName |
| `fieldName` | `string` |  The name of your field |
| `style` | `{}` |  Add your custom styles |




## 👤 Authors

 [@Mustafa-Seif](https://github.com/Mustafa-Seif)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-portfolio-rust-xi.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mustafa-seif-el-nasr-439ba0223/)



## 📝License

[MIT](https://choosealicense.com/licenses/mit/)


## 🤝 Support

For support or any feedback, email mustafa.webdev7@gmail.com 

