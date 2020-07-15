import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeItemsListComponent} from './containers/home-items-list/home-items-list.component';
import {ItemCardModule} from '../../core/components/item-card/item-card.module';
import {HomeRoutingModule} from './home-routing.module';
import {NzGridModule} from 'ng-zorro-antd';
import {ItemsService} from './services/items.service';
import {MockItemsApi} from './api/mock-items.api';


@NgModule({
  declarations: [
    HomeItemsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemCardModule,
    NzGridModule,
  ],
  providers: [
    ItemsService,
    MockItemsApi
  ]
})
export class HomeModule { }
