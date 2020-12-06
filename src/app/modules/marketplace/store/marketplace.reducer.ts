import {MarketplaceActions, MarketplaceActionTypes} from './marketplace.actions';
import {WalletModel} from '../models/wallet.model';
import {CartModel} from '../models/cart.model';

const AD_FEE = 0.02;
const SERVICE_FEE = 0.05;
const SUPPORT_FEE = 0.01;
const ITEM_TOTAL_PRICE = 1 - (AD_FEE + SERVICE_FEE + SUPPORT_FEE);

export const calculate = (carts: CartModel[]) => {
  const wallets = {
    sub1: 0,
    sub2: 0,
    sub3: 0,
    sub4: 0,
    sub5: 0,
    sub6: 0,
  };

  carts.map(cart => cart.items.map(item => {
    wallets.sub1 += item.price * SERVICE_FEE;
    wallets.sub2 += item.price * AD_FEE;
    wallets.sub3 += item.price * SUPPORT_FEE;
    switch (item.store) {
      case 'Xiaomi':
        wallets.sub4 += item.price * ITEM_TOTAL_PRICE;
        break;
      case 'Balmain':
        wallets.sub5 += item.price * ITEM_TOTAL_PRICE;
        break;
      case 'Pierre Cardin':
        wallets.sub6 += item.price * ITEM_TOTAL_PRICE;
    }
  }));
  return wallets;
};

export const marketplaceFeatureKey = 'marketplace';

export interface MarketplaceState {
  wallet: WalletModel;
  cart: CartModel;
  isLoading: boolean;
}

export const marketplaceInitialState: MarketplaceState = {
  cart: {
    items: []
  },
  wallet: {
    balance: 0,
    pendingTransactions: [],
    completedTransactions: [],
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
    case MarketplaceActionTypes.AddToCart:
      return {
        ...state,
        cart: {
          items: [
            ...state.cart.items,
            action.payload
          ]
        }
      };

    case MarketplaceActionTypes.Checkout:
      const transactions = {...state.cart};
      return {
        ...state,
        wallet: {
          ...state.wallet,
          pendingTransactions: [
            ...state.wallet.pendingTransactions,
            transactions
          ]
        }
      };

    case MarketplaceActionTypes.CheckoutSuccess:
      const calculatedWallets = calculate(state.wallet.pendingTransactions);
      const sum = Object.values(calculatedWallets).reduce((acc, val) => acc + val);
      return {
        ...state,
        wallet: {
          completedTransactions: [
            ...state.wallet.completedTransactions,
            ...state.wallet.pendingTransactions
          ],
          pendingTransactions: [],
          balance: state.wallet.balance + sum,
          sub1: state.wallet.sub1 + calculatedWallets.sub1,
          sub2: state.wallet.sub2 + calculatedWallets.sub2,
          sub3: state.wallet.sub3 + calculatedWallets.sub3,
          sub4: state.wallet.sub4 + calculatedWallets.sub4,
          sub5: state.wallet.sub5 + calculatedWallets.sub5,
          sub6: state.wallet.sub6 + calculatedWallets.sub6,
        }
      };

    case MarketplaceActionTypes.ClearCart:
      return {
        ...state,
        cart: {
          items: []
        }
      };

    default:
      return state;
  }
}
