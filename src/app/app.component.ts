import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ɵElement} from "@angular/forms";
import {Credential, CredentialForm} from "./model/credential";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  credentialList : Array<Credential> = [];

  constructor(private formBuilder : FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.listenToFormChanges();
  }

  private listenToFormChanges() {
    //form subscriptions here
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      password2: this.formBuilder.control('')
    })
  }


  onSubmit($event: any) {
    this.credentialList.push(this.form.value);
  }
}
