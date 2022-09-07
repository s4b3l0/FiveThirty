import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomValidationService} from "./custom-validation.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CustomValidationService
  ],
  exports: [
  ]
})
export class UtilsModule { }
