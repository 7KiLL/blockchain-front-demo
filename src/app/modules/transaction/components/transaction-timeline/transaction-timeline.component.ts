import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger, useAnimation} from '@angular/animations';
import {bounce, rotateOut} from 'ng-animate';

@Component({
  selector: 'app-transaction-timeline',
  templateUrl: './transaction-timeline.component.html',
  styleUrls: ['./transaction-timeline.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ]
})
export class TransactionTimelineComponent implements OnInit {
  pendingStatus = 'Loading...';
  transactions = [
    'First transaction',
    'Second transaction',
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pendingStatus = null;
      this.transactions.push('Third transaction');
    }, 2000);
  }

}
