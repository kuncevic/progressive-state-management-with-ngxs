import { Component, OnInit } from '@angular/core';
import { MessageStore } from './services/message-store.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(private messageStore: MessageStore) {}

  ngOnInit(): void {}

  resetMessage(): void {
    this.messageStore.reset();
  }
}
