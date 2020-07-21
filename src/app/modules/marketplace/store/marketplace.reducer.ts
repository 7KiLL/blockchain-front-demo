
import { MarketplaceActions, MarketplaceActionTypes } from './marketplace.actions';
import {WalletModel} from '../models/wallet.model';
import {TransactionModel} from '../models/transaction.model';

export const marketplaceFeatureKey = 'marketplace';

export interface MarketplaceState {
  wallet: WalletModel;
  transactions: TransactionModel[];
  isLoading: boolean;
}

export const marketplaceInitialState: MarketplaceState = {
  transactions: [],
  wallet: {
    balance: 0,
    pendingForFill: 0,
    sub1: 0,
    sub2: 0,
    sub3: 0,
    sub4: 0,
    sub5: 0,
    sub6: 0,
  },
  isLoading: false
};

export function marketplaceReducer(state = marketplaceInitialState, action: MarketplaceActions): MarketplaceState {
  switch (action.type) {
    case MarketplaceActionTypes.CheckoutItem:
      return {
        ...state,
        isLoading: true
        // transactions: [
        //   ...state.transactions,
        //   t
        // ]
      };

    case MarketplaceActionTypes.SetLoading:
      return {
        ...state,
        isLoading: action.payload
      };

    case MarketplaceActionTypes.CheckoutWaitingForPending:
      const transaction = action.payload;

      return {
        ...state,
        wallet: {
          ...state.wallet,
          pendingForFill: transaction.amount,
        },
        transactions: [...state.transactions, transaction],
      };

    case MarketplaceActionTypes.CheckoutSuccess:
      const transactions = [...state.transactions];
      const transactionForSuccessIndex = transactions.findIndex(t => t.timestamp === action.payload.timestamp);

      const updatedTransaction = {
        ...transactions[transactionForSuccessIndex],
        status: 'success'
      };

      transactions[transactionForSuccessIndex] = updatedTransaction;
      // transactions[transactionForSuccessIndex].status = 'success';


      return {
        ...state,
        transactions: [...transactions, ]
      };

    case MarketplaceActionTypes.FillWallet:
      const pending = state.wallet.pendingForFill;
      const calculatedSubs = {
        sub1: state.wallet.sub1 + pending * 0.2,
        sub2: state.wallet.sub2 + pending * 0.15,
        sub3: state.wallet.sub3 + pending * 0.05,
        sub4: state.wallet.sub4 + pending * 0.1,
        sub5: state.wallet.sub5 + pending * 0.30,
        sub6: state.wallet.sub6 + pending * 0.20
      };
      return {
        ...state,
        wallet: {
          ...state.wallet,
          balance: state.wallet.balance + pending,
          pendingForFill: 0,
          ...calculatedSubs
        }
      };

    default:
      return state;
  }
}
