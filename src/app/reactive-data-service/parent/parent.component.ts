import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageStore } from '../services/store.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message$;
  constructor(private messageStore: MessageStore) {}

  ngOnInit(): void {
    this.message$ = this.messageStore.state$.pipe(map((x) => x.number));
  }

  setCounter(value): void {
    this.messageStore.setCounter(value);
  }
}
