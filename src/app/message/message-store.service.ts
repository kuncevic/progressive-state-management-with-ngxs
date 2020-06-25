import { Injectable } from '@angular/core';
import { ReactiveStore } from '../reactive-store';

interface Count {
  message: string;
}

const initialMessage: Count = { message: '42' };

@Injectable({
  providedIn: 'root',
})
export class MessageStore extends ReactiveStore<Count> {
  constructor() {
    super(initialMessage);
  }

  public setMessage(message: string): void {
    this.setState({ message });
  }

  public reset(): void {
    this.setState(initialMessage);
  }
}
