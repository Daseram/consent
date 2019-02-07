import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {

  consentForm: FormGroup;

  checkOptions = [
    'Receive newsletter',
    'Be shown targeted ads',
    'Contribute to anonymous visits statistics'
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.consentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

  selectOption() {

  }

}
