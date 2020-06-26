import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageStore } from '../services/store.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  message$;
  constructor(private messageStore: MessageStore) {}

  ngOnInit(): void {
    this.message$ = this.messageStore.state$.pipe(map((x) => x.number));
  }

  setCounter(value: number): void {
    this.messageStore.setCounter(value);
  }
}
