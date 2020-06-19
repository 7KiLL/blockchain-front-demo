import {initialTransactionState, ITransactionState} from './transaction.state';
import {ETransactionActions, TransactionActions} from './transaction.actions';

export const transactionReducers = (state = initialTransactionState, action: TransactionActions): ITransactionState => {
  switch (action.type) {
    case ETransactionActions.GetTransactionsSuccess:
      return {
        ...state,
        transactions: action.payload
      };
    default:
      return state;
  }
};
