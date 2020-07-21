import {ItemModel} from './item.model';

export interface TransactionModel {
  amount: number;
  status: string;
  item: ItemModel;
  timestamp: number;
}
