import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Dispatch } from 'store';
import { Product, PaginatedRes, productsService, ProductsQuery } from 'common';

export type State = {
  products: {
    loading: boolean;
    loaded?: PaginatedRes<Product>;
    errored?: string;
  };
};

export const initialState: State = {
  products: {
    loading: false,
  },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getProductsRequest(state) {
      state.products.loading = true;
    },
    getProductsSucceed(
      state,
      { payload }: PayloadAction<PaginatedRes<Product>>
    ) {
      state.products.loading = false;
      state.products.loaded = payload;
    },
    getProductsFailed(state, { payload }: PayloadAction<string>) {
      state.products.loading = false;
      state.products.errored = payload;
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
    .catch((err) => {
      dispatch(actions.getProductsFailed(err));
    });
};

export const { reducer } = slice;
export { actions };
