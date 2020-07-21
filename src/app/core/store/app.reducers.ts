import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from './app.state';
import {marketplaceReducer} from '../../modules/marketplace/store/marketplace.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  marketplace: marketplaceReducer
};
