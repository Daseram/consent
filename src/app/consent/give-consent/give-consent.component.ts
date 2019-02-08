import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consent } from '../consent.model';
import { ConsentService } from '../consent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {

  consentForm: FormGroup;

  checkOptions = [
    'Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visits statistics'
  ];

  selectedConsents = [];

  constructor(private formBuilder: FormBuilder, private consentService: ConsentService, private router: Router) { }

  ngOnInit() {
    this.consentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(formValue) {
    const consent: Consent = {
      name: formValue.name,
      email: formValue.email,
      consents: this.selectedConsents
    };
    this.consentService.saveConsent(consent)
    .subscribe(
      response => {console.log(response); },
      error => { console.log(error); },
      () => { this.gotToConsents(); }
    );
  }

  gotToConsents() {
    this.router.navigate(['/collected']);
  }

  selectOption(option) {
    const consentAdded = this.selectedConsents.findIndex( consent => consent === option);
    if (consentAdded === -1) {
      this.selectedConsents.push(option);
    } else {
      this.selectedConsents.splice(consentAdded, 1);
    }
    console.log(this.selectedConsents);
  }

}
