import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from './app.state';
import {transactionReducers} from '../../modules/transaction/store/transaction.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  transactions: transactionReducers
};
