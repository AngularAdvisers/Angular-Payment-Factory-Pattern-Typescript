import { TestBed } from '@angular/core/testing';

import { PaypalPaymentsService } from './paypal-payments.service';

describe('PaypalPaymentsService', () => {
  let service: PaypalPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
