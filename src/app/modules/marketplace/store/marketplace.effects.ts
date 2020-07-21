import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {delay, map, mergeMap} from 'rxjs/operators';
import {
  CheckoutItem,
  CheckoutSuccess,
  CheckoutWaitingForPending,
  FillWallets,
  MarketplaceActions,
  MarketplaceActionTypes, SetLoading
} from './marketplace.actions';
import {TransactionModel} from '../models/transaction.model';


@Injectable()
export class MarketplaceEffects {

  @Effect()
  checkoutItem$ = this.actions$.pipe(
    ofType<CheckoutItem>(MarketplaceActionTypes.CheckoutItem),
    delay(1350),
    mergeMap((action) => {
      // const transaction: TransactionModel = {
      //   amount: action.payload.price,
      //   item: action.payload,
      //   status: 'pending'
      // };

      const t: TransactionModel = {
        item: action.payload,
        amount: action.payload.price,
        status: 'pending',
        timestamp: new Date().getTime()
      };
      return [new CheckoutWaitingForPending(t), new SetLoading(false)];
    })
  );

  @Effect()
  checkoutWaitingForPending$ = this.actions$.pipe(
    ofType<CheckoutWaitingForPending>(MarketplaceActionTypes.CheckoutWaitingForPending),
    delay(6000),
    mergeMap(t => [new CheckoutSuccess(t.payload)])
  );

  @Effect()
  checkoutSuccess$ = this.actions$.pipe(
    ofType<CheckoutSuccess>(MarketplaceActionTypes.CheckoutSuccess),
    delay(1150),
    // map(transaction => ({
    //   ...transaction,
    //   payload: {
    //     ...transaction.payload,
    //     status: 'success'
    //   }
    // })),
    mergeMap(() => [new FillWallets()])
  );


  // @Effect()
  // loadMarketplaces$ = this.actions$.pipe(
  //   ofType(MarketplaceActionTypes.LoadMarketplaces),
  //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //   concatMap(() => EMPTY)
  // );


  constructor(private actions$: Actions<MarketplaceActions>) {
  }

}
