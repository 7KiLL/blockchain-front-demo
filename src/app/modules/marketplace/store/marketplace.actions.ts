import { Action } from '@ngrx/store';
import {ItemModel} from '../models/item.model';
import {TransactionModel} from '../models/transaction.model';

export enum MarketplaceActionTypes {
  CheckoutItem = '[Marketplace] Item Checkout',
  CheckoutWaitingForPending = '[Marketplace] Checkout waiting for pending',
  CheckoutSuccess = '[Marketplace] Checkout Success',
  FillWallet = '[Marketplace] Wallet Filled',
  SetLoading = '[Marketplace] Set Loading'
}



export class CheckoutItem implements Action {
  readonly type = MarketplaceActionTypes.CheckoutItem;
  constructor(public payload: ItemModel) {}
}

export class CheckoutWaitingForPending implements Action {
  readonly type = MarketplaceActionTypes.CheckoutWaitingForPending;
  constructor(public payload: TransactionModel) {}
}

export class CheckoutSuccess implements Action {
  readonly type = MarketplaceActionTypes.CheckoutSuccess;
  constructor(public payload: TransactionModel) {}
}

export class FillWallets implements Action {
 readonly type = MarketplaceActionTypes.FillWallet;
}

export class SetLoading implements Action {
  readonly type = MarketplaceActionTypes.SetLoading;
  constructor(public payload: boolean) {}
}

export type MarketplaceActions = CheckoutItem | CheckoutWaitingForPending |CheckoutSuccess | FillWallets | SetLoading;
