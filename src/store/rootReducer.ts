import { combineReducers } from '@reduxjs/toolkit';

import { AppState } from './AppState';
import * as products from './productsSlice';

export const rootReducer = combineReducers<AppState>({
  products: products.reducer,
});
