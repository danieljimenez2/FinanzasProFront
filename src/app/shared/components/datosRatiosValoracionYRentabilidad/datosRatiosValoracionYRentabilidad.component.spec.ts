/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosRatiosValoracionYRentabilidadComponent } from './datosRatiosValoracionYRentabilidad.component';

describe('DatosRatiosValoracionYRentabilidadComponent', () => {
  let component: DatosRatiosValoracionYRentabilidadComponent;
  let fixture: ComponentFixture<DatosRatiosValoracionYRentabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosRatiosValoracionYRentabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosRatiosValoracionYRentabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
