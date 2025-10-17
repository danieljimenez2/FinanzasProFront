/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosMargenesYGastosVentasComponent } from './datosMargenesYGastosVentas.component';

describe('DatosMargenesYGastosVentasComponent', () => {
  let component: DatosMargenesYGastosVentasComponent;
  let fixture: ComponentFixture<DatosMargenesYGastosVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosMargenesYGastosVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosMargenesYGastosVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
