import {Component, OnInit} from '@angular/core';
import {MockItemService} from '../../mock/mock-item.service';
import {ItemModel} from '../../models/item.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../core/store/app.state';
import {AddToCart} from '../../store/marketplace.actions';
import {MarketplaceEffects} from '../../store/marketplace.effects';

@Component({
  selector: 'app-marketplace-item-list',
  templateUrl: './marketplace-item-list.component.html',
  styleUrls: ['./marketplace-item-list.component.scss']
})
export class MarketplaceItemListComponent implements OnInit {

  public items$ = this.mockItemService.getItems();

  constructor(
    private mockItemService: MockItemService,
    private modalService: NgbModal,
    private store: Store<IAppState>,
    private marketplaceEffects: MarketplaceEffects
  ) {
  }

  ngOnInit(): void {
  }

  // handlePurchase($event: ItemModel) {
  //   const modalRef = this.modalService.open(PurchaseModalComponent, {
  //     centered: true
  //   });
  //   modalRef.componentInstance.fillModal($event);
  //
  //   this.marketplaceEffects.checkoutItem$
  //     /**
  //      * We will take in only once since subscription will create every time onClick
  //      */
  //     .pipe(
  //       take(1),
  //       delay(250)
  //     )
  //     .subscribe(res => {
  //       modalRef.close();
  //   });
  //
  //
  //   modalRef.componentInstance.checkout
  //     /**
  //      * Same as above example
  //      */
  //     .pipe(take(1))
  //     .subscribe(item => this.store.dispatch(new CheckoutItem(item)));
  // }

  handlePurchase($event: ItemModel) {
    this.store.dispatch(new AddToCart($event));
  }
}
