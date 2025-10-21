/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SectorMercadoService } from './sector-mercado.service';

describe('Service: SectorMercado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectorMercadoService]
    });
  });

  it('should ...', inject([SectorMercadoService], (service: SectorMercadoService) => {
    expect(service).toBeTruthy();
  }));
});
