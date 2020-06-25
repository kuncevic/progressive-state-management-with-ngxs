import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageStore } from '../services/message-store.service';

@Component({
  selector: 'app-message-child',
  templateUrl: './message-child.component.html',
  styleUrls: ['./message-child.component.scss'],
})
export class MessageChildComponent implements OnInit {
  message$;
  constructor(private messageStore: MessageStore) {}

  ngOnInit(): void {
    this.message$ = this.messageStore.state$.pipe(map(x => x.message));
  }

  sendMessage(): void {
    this.messageStore.setMessage('Hello from Child component');
  }
}
