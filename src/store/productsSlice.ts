import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Dispatch } from 'store';
import {
  Product,
  PaginatedRes,
  productsService,
  ProductsQuery,
  ErrorRes,
} from 'common';

export type State = {
  loading: boolean;
  products?: PaginatedRes<Product>;
  error?: string;
  query: ProductsQuery;
};

export const initialState: State = {
  loading: false,
  query: {
    limit: 8,
    page: 1,
    search: '',
    active: false,
    promo: false,
  },
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsRequest(state) {
      state.loading = true;
    },
    getProductsSucceed(
      state,
      { payload }: PayloadAction<PaginatedRes<Product>>
    ) {
      state.loading = false;
      state.products = payload;
    },
    getProductsFailed(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
    changeQuery(state, { payload }: PayloadAction<ProductsQuery>) {
      state.query = payload;
    },
  },
});

const { actions } = slice;

export const getProducts = (query: ProductsQuery) => (dispatch: Dispatch) => {
  dispatch(actions.getProductsRequest());
  productsService
    .getProducts(query)
    .then((res) => {
      dispatch(actions.getProductsSucceed(res.data));
    })
    .catch((err: ErrorRes) => {
      dispatch(actions.getProductsFailed(err.message));
    });
};

export const changeQuery = (query: ProductsQuery) => (dispatch: Dispatch) => {
  dispatch(actions.changeQuery(query));
};

export const { reducer } = slice;
export { actions };
