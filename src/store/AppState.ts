import * as products from './productsSlice';

export type AppState = {
  products: products.State;
};

export const productsSelector = ({ products }: AppState) => products;
