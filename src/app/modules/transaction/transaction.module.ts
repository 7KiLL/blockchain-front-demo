import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTimelineComponent } from './components/transaction-timeline/transaction-timeline.component';
import {NzGridModule, NzTimelineModule} from 'ng-zorro-antd';
import { TransactionListComponent } from './containers/transaction-list/transaction-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [TransactionTimelineComponent, TransactionListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NzTimelineModule,
    NzGridModule,
    BrowserAnimationsModule
  ],
  exports: [
    TransactionListComponent, TransactionTimelineComponent
  ]
})
export class TransactionModule { }
