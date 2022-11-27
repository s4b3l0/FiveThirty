import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  testValue: string = 'hello';
  mode: Mode = Mode.View;
  testValue2: string = 'world';

  constructor(private formBuilder: FormBuilder,
              private cvs: CustomValidationService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  get controls() {
    return this.form.controls;
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

  setMode() {
    if (this.mode === Mode.Edit) {
      this.mode = Mode.View;
      return;
    }
    this.mode = Mode.Edit
  }
}

export enum Mode {
  Edit = 'Edit',
  View = 'View',
  All = 'All'
}
