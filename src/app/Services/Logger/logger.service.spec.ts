import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('messages should be empty initially', () => {
    expect(service.messages).toEqual([]);
  });

  it('messages should have soem value', () => {
    service.log('test');
    expect(service.messages.length).toEqual(1);
  });

  it('messages should be empty after clear', () => {
    service.clear();
    expect(service.messages.length).toEqual(0);
  });
});
