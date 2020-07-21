import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MarketplaceItemListComponent} from './containers/marketplace-item-list/marketplace-item-list.component';
import {MarketplaceRoutingModule} from './marketplace-routing.module';
import { MarketplaceItemComponent } from './components/marketplace-item/marketplace-item.component';
import {MockItemService} from './mock/mock-item.service';
import { PurchaseModalComponent } from './modals/purchase-modal/purchase-modal.component';


@NgModule({
  declarations: [
    MarketplaceItemListComponent,
    MarketplaceItemComponent,
    PurchaseModalComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ],
  providers: [
    MockItemService
  ]
})
export class MarketplaceModule { }
