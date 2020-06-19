import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ETransactionActions, GetTransactions} from './transaction.actions';

@Injectable()
export class TransactionEffects {
  @Effect()
  $getTransactions = this.actions$.pipe(
    ofType<GetTransactions>(ETransactionActions.GetTransactions),
  );

  constructor(
    private actions$: Actions
  ) {
  }

}
