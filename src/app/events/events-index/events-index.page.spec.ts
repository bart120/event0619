import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsIndexPage } from './events-index.page';

describe('EventsIndexPage', () => {
  let component: EventsIndexPage;
  let fixture: ComponentFixture<EventsIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
