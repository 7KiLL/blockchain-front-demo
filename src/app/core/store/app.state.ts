import {marketplaceInitialState, MarketplaceState} from '../../modules/marketplace/store/marketplace.reducer';

export interface IAppState {
  // router?: RouterReducerState;
  marketplace: MarketplaceState;
}

export const initialAppState: IAppState = {
  marketplace: marketplaceInitialState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
