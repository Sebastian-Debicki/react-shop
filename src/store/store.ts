import { configureStore } from '@reduxjs/toolkit';

import { AppState } from './AppState';
import { rootReducer } from './rootReducer';

export const store = configureStore<AppState>({
  reducer: rootReducer,
});

export type Dispatch = typeof store.dispatch;
