/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Datos_analistas_scoreComponent } from './datos_analistas_score.component';

describe('Datos_analistas_scoreComponent', () => {
  let component: Datos_analistas_scoreComponent;
  let fixture: ComponentFixture<Datos_analistas_scoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datos_analistas_scoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datos_analistas_scoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
