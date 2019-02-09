import { Injectable } from '@angular/core';
import { Consent } from './consent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  savedConsents: Consent[];
  url = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  saveConsent(consent: Consent) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.url}/consent`, consent, { headers: headers});
  }

  getConsents() {
    return this.http.get(`${this.url}/consents`);
  }
}
