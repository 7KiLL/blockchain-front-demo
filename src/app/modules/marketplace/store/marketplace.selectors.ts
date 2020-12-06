import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMarketplace from './marketplace.reducer';

export const selectMarketplaceState = createFeatureSelector<fromMarketplace.MarketplaceState>(
  fromMarketplace.marketplaceFeatureKey
);

export const selectMarketplaceLoadingState = createSelector(selectMarketplaceState, (state) => state.isLoading);

export const selectCompletedTransactions = createSelector(selectMarketplaceState, (state) => state.wallet.completedTransactions);

export const selectMarketplaceWalletState = createSelector(selectMarketplaceState, (state) => state.wallet);

export const selectMarketplaceCartState = createSelector(selectMarketplaceState, (state) => state.cart);
