/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectorMercadoComponent } from './sector-mercado.component';

describe('SectorMercadoComponent', () => {
  let component: SectorMercadoComponent;
  let fixture: ComponentFixture<SectorMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
