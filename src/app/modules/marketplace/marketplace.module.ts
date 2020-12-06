import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MarketplaceItemListComponent} from './containers/marketplace-item-list/marketplace-item-list.component';
import {MarketplaceRoutingModule} from './marketplace-routing.module';
import { MarketplaceItemComponent } from './components/marketplace-item/marketplace-item.component';
import {MockItemService} from './mock/mock-item.service';
import { PurchaseModalComponent } from './modals/purchase-modal/purchase-modal.component';
import { MarketplaceCartComponent } from './components/marketplace-cart/marketplace-cart.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        MarketplaceItemListComponent,
        MarketplaceItemComponent,
        PurchaseModalComponent,
        MarketplaceCartComponent
    ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    NgbDropdownModule
  ],
    exports: [
        MarketplaceCartComponent
    ],
    providers: [
        MockItemService
    ]
})
export class MarketplaceModule { }
