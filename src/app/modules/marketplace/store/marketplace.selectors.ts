import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMarketplace from './marketplace.reducer';

export const selectMarketplaceState = createFeatureSelector<fromMarketplace.MarketplaceState>(
  fromMarketplace.marketplaceFeatureKey
);

export const selectMarketplaceLoadingState = createSelector(selectMarketplaceState, (state) => state.isLoading);

export const selectMarketplaceTransactionsState = createSelector(selectMarketplaceState, (state) => state.transactions);

export const selectMarketplaceWalletState = createSelector(selectMarketplaceState, (state) => state.wallet);
