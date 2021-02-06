export interface Product {
  id: string;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: string;
  active: boolean;
}

export interface PaginatedRes<T> {
  itemCount: number;
  total: number;
  pageCout: number;
  next: string;
  previous: string;
  items: T[];
}
