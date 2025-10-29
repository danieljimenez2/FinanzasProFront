/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectorMercadoPaisComponent } from './sector-mercado-pais.component';

describe('SectorMercadoPaisComponent', () => {
  let component: SectorMercadoPaisComponent;
  let fixture: ComponentFixture<SectorMercadoPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorMercadoPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorMercadoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
