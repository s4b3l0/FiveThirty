import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomValidationService} from "./custom-validation.service";
import {ValidationErrorsService} from "./validation-errors.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CustomValidationService,
    ValidationErrorsService
  ],
  exports: [
  ]
})
export class UtilsModule { }
