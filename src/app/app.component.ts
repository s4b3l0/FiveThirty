import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Credential} from "./model/credential";
import {CustomValidationService} from "./utils/custom-validation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  credentialList: Array<Credential> = [];

  get controls() {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder, private cvs: CustomValidationService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.listenToFormChanges();
  }

  onSubmit(_meh: any) {
    this.credentialList.push(this.form.value);
  }

  private listenToFormChanges() {
    //form subscriptions here
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required),
      confirmPassword: this.formBuilder.control('', Validators.required)
    }, {asyncValidators: this.cvs.passwordMatch().bind(this.form)})
  }
}
