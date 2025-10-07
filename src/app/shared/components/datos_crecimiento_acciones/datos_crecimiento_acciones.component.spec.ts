/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Datos_crecimiento_accionesComponent } from './datos_crecimiento_acciones.component';

describe('Datos_crecimiento_accionesComponent', () => {
  let component: Datos_crecimiento_accionesComponent;
  let fixture: ComponentFixture<Datos_crecimiento_accionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datos_crecimiento_accionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datos_crecimiento_accionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
