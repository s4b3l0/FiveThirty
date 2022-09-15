import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationErrorsService} from "../utils/validation-errors.service";

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent implements OnInit {
//TODO: Delete comments,
  accountDetails: Array<Credential> = [];
  //Cilo: inject your services like this or from the constructor you do not need to say "= new Service"
  errors = inject(ValidationErrorsService);
  //Cilo: I also refactored this to inject inline
  credentialForm = inject(FormBuilder).group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.compose([
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['', [Validators.required, Validators.pattern('')]]
  })

  //Cilo : remove this constructor normally we would inject a service at constructor level like you see bellow , make sure that you sevice has a provider though
  constructor(private fb: FormBuilder,
              private validationErrorsService: ValidationErrorsService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountDetails.push(<Credential>this.credentialForm.value);
  }
}
