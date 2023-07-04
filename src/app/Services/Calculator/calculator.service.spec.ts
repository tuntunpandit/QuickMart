import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('Calculator service', () => {
  let mockLoggerService: any;
  let calcService: CalculatorService;
  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('loggerService', ['log']);
    calcService = new CalculatorService(mockLoggerService);
  });

  it('Add two number', () => {
    let result = calcService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('Subtract two number', () => {
    let result = calcService.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
