import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error: any): void {
    const chunkFailedMessage = 'Loading chunk';
    if (error.message.includes(chunkFailedMessage)) {
      window.location.href = '/erro';
    }
    console.error(error);
  }
}
