/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InformacionCompañiaService } from './informacion-compañia.service';

describe('Service: InformacionCompañia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionCompañiaService]
    });
  });

  it('should ...', inject([InformacionCompañiaService], (service: InformacionCompañiaService) => {
    expect(service).toBeTruthy();
  }));
});
