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
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
  items: T[];
}
