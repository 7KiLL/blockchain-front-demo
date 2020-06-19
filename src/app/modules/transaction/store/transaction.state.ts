import {ITransaction} from '../models/transaction';

export interface ITransactionState {
  transactions: ITransaction[];
}

export const initialTransactionState: ITransactionState = {
  transactions: null
};
