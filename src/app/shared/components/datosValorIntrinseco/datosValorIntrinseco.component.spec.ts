/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosValorIntrinsecoComponent } from './datosValorIntrinseco.component';

describe('DatosValorIntrinsecoComponent', () => {
  let component: DatosValorIntrinsecoComponent;
  let fixture: ComponentFixture<DatosValorIntrinsecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosValorIntrinsecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosValorIntrinsecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
