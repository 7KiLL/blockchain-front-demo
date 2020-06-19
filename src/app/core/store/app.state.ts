import {initialTransactionState, ITransactionState} from '../../modules/transaction/store/transaction.state';

export interface IAppState {
  // router?: RouterReducerState;
  transactions: ITransactionState;
}

export const initialAppState: IAppState = {
  transactions: initialTransactionState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
