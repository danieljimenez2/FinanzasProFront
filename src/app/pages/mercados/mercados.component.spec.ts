/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MercadosComponent } from './mercados.component';

describe('MercadosComponent', () => {
  let component: MercadosComponent;
  let fixture: ComponentFixture<MercadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
