import { Component, OnInit } from '@angular/core';
import { MessageStore } from './services/store.service';

@Component({
  selector: 'app-reactive-service',
  templateUrl: './reactive-service.component.html',
  styleUrls: ['./reactive-service.component.scss'],
})
export class ReactiveServiceComponent implements OnInit {
  constructor(private messageStore: MessageStore) {}

  ngOnInit(): void {}

  resetMessage(): void {
    this.messageStore.reset();
  }
}
