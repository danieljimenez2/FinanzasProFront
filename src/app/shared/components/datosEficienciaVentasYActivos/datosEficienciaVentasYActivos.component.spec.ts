/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosEficienciaVentasYActivosComponent } from './datosEficienciaVentasYActivos.component';

describe('DatosEficienciaVentasYActivosComponent', () => {
  let component: DatosEficienciaVentasYActivosComponent;
  let fixture: ComponentFixture<DatosEficienciaVentasYActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEficienciaVentasYActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEficienciaVentasYActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
