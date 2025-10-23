/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarteraInversionService } from './carteraInversion.service';

describe('Service: CarteraInversion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarteraInversionService]
    });
  });

  it('should ...', inject([CarteraInversionService], (service: CarteraInversionService) => {
    expect(service).toBeTruthy();
  }));
});
