import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerS: LoggerService) {}

  add(a: number, b: number) {
    this.loggerS.log('Addition successful');
    return a + b;
  }

  subtract(a: number, b: number) {
    this.loggerS.log('Subtraction successful');
    return a - b;
  }
}
