import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
})
export class StrengthPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length < 5) {
      return 'Weak';
    } else if (value.length >= 5 && value.length < 10) {
      return 'Strong';
    } else {
      return 'Strongest';
    }
  }
}
