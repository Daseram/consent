import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsentService } from './consent.service';
import { Consent } from './consent.model';

describe('ConsentService', () => {
  let injector: TestBed;
  let service: ConsentService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsentService]
    });
    injector = getTestBed();
    service = injector.get(ConsentService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getConsents', () => {
    it('should return an Observable<Consent[]>', () => {
      const dummyConsent = [
        {
          name: 'qrqwre',
          email: 'qwrqw@asdfas',
          consents: [
              'Receive newsletter',
              'Be shown targeted ads'
          ]
        },
        {
            name: 'test',
            email: 'test@test',
            consents: [
                'Be shown targeted ads'
            ]
        }
      ];
      service.getConsents().subscribe((data: any) => {
        expect(data.consents.length).toBe(2);
        expect(data.consents).toEqual(dummyConsent);
      });
      const req = httpMock.expectOne(`${service.url}/consents`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyConsent);
    });
  });

  describe('#postConsents', () => {
    it('should return an ok answer', () => {
      const dummySavedConsent: Consent = {
          name: 'test',
          email: 'test@test',
          consents: [
              'Be shown targeted ads'
          ]
        };
      const dummyConsent = {
        ok: true
      };
      service.saveConsent(dummySavedConsent).subscribe((data: any) => {
        expect(data.ok).toBeTruthy();
      });
      const req = httpMock.expectOne(`${service.url}/consent`);
      expect(req.request.method).toBe('POST');
      req.flush(dummyConsent);
    });
  });
});
