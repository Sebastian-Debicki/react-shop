import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Dispatch } from 'store';
import { Product, PaginatedRes, productsService, ProductsQuery } from 'common';

export type State = {
  loading: boolean;
  products?: PaginatedRes<Product>;
  error?: string;
};

export const initialState: State = {
  loading: false,
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsRequest(state) {
      return { ...state, loading: true };
    },
    getProductsSucceed(
      state,
      { payload }: PayloadAction<PaginatedRes<Product>>
    ) {
      return { ...state, loading: false, products: payload };
    },
    getProductsFailed(state, { payload }: PayloadAction<string>) {
      return { ...state, loading: false, error: payload };
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
