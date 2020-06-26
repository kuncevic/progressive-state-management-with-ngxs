import { Component, OnInit } from '@angular/core';
import { CounterStore } from './services/store.service';

@Component({
  selector: 'app-reactive-service',
  templateUrl: './reactive-service.component.html',
  styleUrls: ['./reactive-service.component.scss'],
})
export class ReactiveServiceComponent implements OnInit {
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {}

  resetMessage(): void {
    this.counterStore.reset();
  }
}
