import { TestBed } from '@angular/core/testing';

import { TicketimagesService } from './ticketimages.service';

describe('TicketimagesService', () => {
  let service: TicketimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
