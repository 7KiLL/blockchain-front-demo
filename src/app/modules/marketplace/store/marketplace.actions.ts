import { Action } from '@ngrx/store';
import {ItemModel} from '../models/item.model';
import {TransactionModel} from '../models/transaction.model';

export enum MarketplaceActionTypes {
  AddToCart = '[Marketplace] Add to cart',
  Checkout = '[Marketplace] Checkout',
  CheckoutSuccess = '[Marketplace] Checkout Success',
  ClearCart = '[Marketplace] Clear Cart'
}

export class AddToCart implements Action {
  readonly  type = MarketplaceActionTypes.AddToCart;
  constructor(public payload: ItemModel) {}
}

export class Checkout implements Action {
  readonly type = MarketplaceActionTypes.Checkout;
  constructor() {
  }
}

export class CheckoutSuccess implements Action {
  readonly type = MarketplaceActionTypes.CheckoutSuccess;
  constructor() {
  }
}

export class ClearCart implements Action {
  readonly type = MarketplaceActionTypes.ClearCart;
  constructor() {
  }
}

export type MarketplaceActions = AddToCart | Checkout | CheckoutSuccess | ClearCart;
