import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationErrorsService} from "../utils/validation-errors.service";

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  accountDetails: Array<Credential> = [];
  errors: ValidationErrorsService = new ValidationErrorsService();

  ngOnInit(): void {
  }

  credentialForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.compose([
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['', [ Validators.required, Validators.pattern('')]]

  })

  onSubmit(){
    this.accountDetails.push(<Credential>this.credentialForm.value);
  }
}
