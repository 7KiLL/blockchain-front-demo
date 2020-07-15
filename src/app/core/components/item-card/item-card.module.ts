import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemCardComponent} from './item-card.component';
import {NzCardModule, NzIconModule, NzModalModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [
    ItemCardComponent
  ],
  exports: [
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzIconModule,
    NzModalModule
  ]
})
export class ItemCardModule { }
