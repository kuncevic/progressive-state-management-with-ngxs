import { Injectable } from '@angular/core';
import { ReactiveStore } from './reactive-store';

interface Message {
  message: string;
}

const initialMessage: Message = { message: '42' };

@Injectable({
  providedIn: 'root',
})
export class MessageStore extends ReactiveStore<Message> {
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
