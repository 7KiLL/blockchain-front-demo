import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Checkout, CheckoutSuccess, ClearCart, MarketplaceActions, MarketplaceActionTypes} from './marketplace.actions';
import {Store} from '@ngrx/store';
import {delay, exhaustMap, mergeMap} from 'rxjs/operators';


@Injectable()
export class MarketplaceEffects {

  @Effect()
  checkout$ = this.actions$.pipe(
    ofType<Checkout>(MarketplaceActionTypes.Checkout),
    delay(1000),
    exhaustMap(() => [new CheckoutSuccess()])
  );

  @Effect()
  checkoutSuccess$ = this.actions$.pipe(
    ofType<CheckoutSuccess>(MarketplaceActionTypes.CheckoutSuccess),
    mergeMap(() => [new ClearCart()])
  );

  constructor(private actions$: Actions<MarketplaceActions>, private store: Store) {
  }

}
