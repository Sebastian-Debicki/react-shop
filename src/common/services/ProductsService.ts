import { AxiosPromise } from 'axios';

import { HttpService } from './HttpService';
import { PaginatedRes, Product, ProductsQuery, makeQuery } from 'common';
import { apiRoutes } from 'core';

export class ProductsService {
  constructor(private httpService: HttpService) {}

  getProducts(query: ProductsQuery): AxiosPromise<PaginatedRes<Product>> {
    return this.httpService.GET(`${apiRoutes.product}?${makeQuery(query)}`);
  }
}
