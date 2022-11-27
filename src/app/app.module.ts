import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "./utils/utils.module";
import { CredentialComponent } from './credential/credential.component';
import {MyNgIfDirective} from "./my-ng-if.directive";

@NgModule({
  declarations: [
    AppComponent,
    CredentialComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    AccordionModule,
    ReactiveFormsModule,
    UtilsModule,
    FormsModule,
    MyNgIfDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
