import {IAppState} from '../../../core/store/app.state';
import {createSelector} from '@ngrx/store';
import {ITransactionState} from './transaction.state';

export const selectTransactions = (state: IAppState) => state.transactions;

export const selectTransactionList = createSelector(
  selectTransactions,
  (state: ITransactionState) => state.transactions
);
