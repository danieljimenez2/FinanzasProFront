/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Datos_compañiaComponent } from './datos_compañia.component';

describe('Datos_compañiaComponent', () => {
  let component: Datos_compañiaComponent;
  let fixture: ComponentFixture<Datos_compañiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datos_compañiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datos_compañiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
