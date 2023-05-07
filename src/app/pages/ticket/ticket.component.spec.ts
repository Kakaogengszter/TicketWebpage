import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ticketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: ticketComponent;
  let fixture: ComponentFixture<ticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
