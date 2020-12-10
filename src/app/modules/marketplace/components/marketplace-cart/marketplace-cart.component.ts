import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MarketplaceState} from '../../store/marketplace.reducer';
import {selectMarketplaceCartState} from '../../store/marketplace.selectors';
import {delay, map, take} from 'rxjs/operators';
import {Checkout } from '../../store/marketplace.actions';
import {PurchaseModalComponent} from '../../modals/purchase-modal/purchase-modal.component';
import {MarketplaceEffects} from '../../store/marketplace.effects';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-marketplace-cart',
  templateUrl: './marketplace-cart.component.html',
  styleUrls: ['./marketplace-cart.component.scss']
})
export class MarketplaceCartComponent implements OnInit {

  public items$ = this.store.select(selectMarketplaceCartState).pipe(
    map(cart => cart.items)
  );
  public itemCount$ = this.items$.pipe(
    map(items => items.length)
  );

  constructor(
    private store: Store<MarketplaceState>,
    private marketplaceEffects: MarketplaceEffects,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
  }

  handleCheckout() {

    const modalRef = this.modalService.open(PurchaseModalComponent, {
      centered: true
    });
    // modalRef.componentInstance.fillModal($event);
    this.marketplaceEffects.checkout$
      /**
       * We will take in only once since subscription will create every time onClick
       */
      .pipe(
        take(1),
        delay(250)
      )
      .subscribe(res => {
        modalRef.close();
    });

    modalRef.componentInstance.checkout
      /**
       * Same as above example
       */
      .pipe(take(1))
      .subscribe(item => {
        this.store.dispatch(new Checkout());
      });
  }
  //
  // handleCheckout() {
  //   this.store.dispatch(new Checkout());
  // }
}
