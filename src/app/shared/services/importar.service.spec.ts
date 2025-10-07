/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImportarService } from './importar.service';

describe('Service: Importar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportarService]
    });
  });

  it('should ...', inject([ImportarService], (service: ImportarService) => {
    expect(service).toBeTruthy();
  }));
});
