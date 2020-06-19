import {Action} from '@ngrx/store';
import {ITransaction} from '../models/transaction';

export enum ETransactionActions {
  GetTransactions = '[Transaction] Get Transactions',
  GetTransactionsSuccess = '[Transaction] Get Transactions Success'
}

export class GetTransactions implements Action {
  public readonly type = ETransactionActions.GetTransactions;
}

export class GetTransactionsSuccess implements Action {
  public readonly type = ETransactionActions.GetTransactionsSuccess;
  constructor(public payload: ITransaction[]) {}
}

export type TransactionActions = GetTransactions | GetTransactionsSuccess;
