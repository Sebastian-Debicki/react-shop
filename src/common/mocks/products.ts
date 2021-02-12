import { Product, PaginatedRes } from '../models';

export const productsMock: PaginatedRes<Product> = {
  items: [
    {
      id: '7',
      name: 'Fantastic Metal Sausages',
      description:
        'Consequatur et est laboriosam in rerum sequi deserunt eaque est.',
      rating: 1,
      image: 'https://picsum.photos/640/480?random=6385',
      promo: false,
      active: false,
    },
    {
      id: '28',
      name: 'Tasty Metal Salad',
      description: 'Molestiae sit ut omnis.',
      rating: 4,
      image: 'https://picsum.photos/640/480?random=2522',
      promo: true,
      active: false,
    },
    {
      id: '46',
      name: 'Awesome Metal Chicken',
      description: 'Nihil quam animi.',
      rating: 5,
      image: 'https://picsum.photos/640/480?random=7613',
      promo: true,
      active: true,
    },
  ],
  meta: {
    totalItems: 84,
    itemCount: 3,
    itemsPerPage: '3',
    totalPages: 28,
    currentPage: 1,
  },
  links: {
    first: 'https://join-tsh-api-staging.herokuapp.com/product?limit=3',
    previous: '',
    next: 'https://join-tsh-api-staging.herokuapp.com/product?page=11&limit=3',
    last: 'https://join-tsh-api-staging.herokuapp.com/product?page=28&limit=3',
  },
};
