import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: string[] = [];
  constructor() {}

  log(meggane: string) {
    this.messages.push(meggane);
  }

  clear() {
    this.messages = [];
  }
}
