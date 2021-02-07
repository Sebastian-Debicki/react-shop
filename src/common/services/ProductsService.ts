import { AxiosPromise } from 'axios';

import { HttpService } from './HttpService';
import { PaginatedRes, Product } from 'common';
import { apiRoutes } from 'core';

export class ProductsService {
  constructor(private httpService: HttpService) {}

  getProducts(page: number): AxiosPromise<PaginatedRes<Product>> {
    return this.httpService.GET(`${apiRoutes.product}?limit=8&page=${page}`);
  }
}
