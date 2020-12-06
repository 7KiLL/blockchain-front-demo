import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MarketplaceState} from '../../store/marketplace.reducer';
import {selectMarketplaceCartState} from '../../store/marketplace.selectors';
import {map, take} from 'rxjs/operators';
import {Checkout, ClearCart} from '../../store/marketplace.actions';

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

  constructor(private store: Store<MarketplaceState>) {
  }

  ngOnInit(): void {
  }

  handleCheckout() {
    this.store.dispatch(new Checkout());
  }
}
