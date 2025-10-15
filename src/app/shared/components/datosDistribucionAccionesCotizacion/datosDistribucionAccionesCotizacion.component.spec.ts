/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosDistribucionAccionesCotizacionComponent } from './datosDistribucionAccionesCotizacion.component';

describe('DatosDistribucionAccionesCotizacionComponent', () => {
  let component: DatosDistribucionAccionesCotizacionComponent;
  let fixture: ComponentFixture<DatosDistribucionAccionesCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDistribucionAccionesCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDistribucionAccionesCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
