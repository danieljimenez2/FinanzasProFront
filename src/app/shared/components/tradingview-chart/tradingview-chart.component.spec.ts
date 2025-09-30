/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TradingviewChartComponent } from './tradingview-chart.component';

describe('TradingviewChartComponent', () => {
  let component: TradingviewChartComponent;
  let fixture: ComponentFixture<TradingviewChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingviewChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
