import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageStore } from '../message-store.service';

@Component({
  selector: 'app-message-parent',
  templateUrl: './message-parent.component.html',
  styleUrls: ['./message-parent.component.scss'],
})
export class MessageParentComponent implements OnInit {
  message$;
  constructor(private messageStore: MessageStore) {}

  ngOnInit(): void {
    this.message$ = this.messageStore.state$.pipe(map((x) => x.message));
  }

  sendMessage(): void {
    this.messageStore.setMessage('Hello from Parent component');
  }
}
