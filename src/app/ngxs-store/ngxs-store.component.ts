import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ResetCounter } from './state/actions';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs-store.component.html',
  styleUrls: ['./ngxs-store.component.scss']
})
export class NgxsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  resetCounter(): void {
    this.store.dispatch(new ResetCounter());
  }

}
