import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedConsentComponent } from './collected-consent.component';

describe('CollectedConsentComponent', () => {
  let component: CollectedConsentComponent;
  let fixture: ComponentFixture<CollectedConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
