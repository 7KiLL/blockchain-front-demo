import {CartModel} from './cart.model';

export interface WalletModel {
  balance: number;
  pendingTransactions: CartModel[];
  completedTransactions: CartModel[];
  sub1: number;
  sub2: number;
  sub3: number;
  sub4: number;
  sub5: number;
  sub6: number;
}
