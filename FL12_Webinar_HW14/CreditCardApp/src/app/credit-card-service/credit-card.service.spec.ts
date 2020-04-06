import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  const VALID_CARD = 'Credit card has a valid format'
  const UNKNOWN_TYPE = 'Unknown card type'
  const INVALID_NUMBER = 'Credit card number is invalid'
  const INVALID_NUMBER_FORMAT = 'Credit card number is in invalid format'
  const INVALID_LENGTH = 'Credit card number has an inappropriate number of digits'
  const SCAM_ATTEMPT = 'Warning! This credit card number is associated with a scam attempt'


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  it('should return error if card type is unknown', () => {
    expect(service.testCreditCard('4111 1111 1111 1111', 'invalid name')).toEqual({
      isValid: false,
      message: UNKNOWN_TYPE
    })
  });

  it('should ignore card name case', () => {
    expect(service.testCreditCard('4111 1111 1111 1111', 'ViSa')).toEqual({
      isValid: true,
      message: VALID_CARD
    })
  });

  it('should retun error if card contains non-numeric characters', () => {
    expect(service.testCreditCard('non-numeric characters', 'Visa')).toEqual({
      isValid: false,
      message: INVALID_NUMBER_FORMAT
    })
  });





});
