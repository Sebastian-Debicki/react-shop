import { HttpService } from './HttpService';
import { ProductsService } from './ProductsService';

export const httpService = new HttpService();
export const productsService = new ProductsService(httpService);
