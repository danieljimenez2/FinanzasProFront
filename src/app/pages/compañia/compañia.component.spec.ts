/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompañiaComponent } from './compañia.component';

describe('CompañiaComponent', () => {
  let component: CompañiaComponent;
  let fixture: ComponentFixture<CompañiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompañiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompañiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
