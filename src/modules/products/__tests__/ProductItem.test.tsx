import React from 'react';

import { render } from 'tests';
import { productsMock } from 'common';
import { ProductItem } from '../components/ProductItem';

describe('ProductDetails', () => {
  test('Displays all informations', async () => {
    const { getByText, getByAltText, getAllByText } = render(
      <ProductItem product={productsMock.items[0]} onButtonClick={jest.fn()} />
    );

    expect(getByAltText('product')).toBeInTheDocument();
    expect(getByText(productsMock.items[0].name)).toBeInTheDocument();
    expect(getByText(productsMock.items[0].description)).toBeInTheDocument();
    expect(getByText('Unavailable')).toBeInTheDocument();
    expect(getAllByText('star-filled.svg').length).toBe(
      productsMock.items[0].rating
    );
    expect(getAllByText('star-empty.svg').length).toBe(
      5 - productsMock.items[0].rating
    );
  });
});
