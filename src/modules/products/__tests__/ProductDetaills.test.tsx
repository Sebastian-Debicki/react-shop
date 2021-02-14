import React from 'react';

import { render } from 'tests';
import { productsMock } from 'common';
import { ProductDetails } from '../components/ProductDetails';

describe('ProductDetails', () => {
  test('Displays all informations', async () => {
    const { getByText, getByAltText } = render(
      <ProductDetails product={productsMock.items[0]} onClose={jest.fn()} />
    );

    expect(getByAltText('product')).toBeInTheDocument();
    expect(getByText('close.svg')).toBeInTheDocument();
    expect(getByText(productsMock.items[0].name)).toBeInTheDocument();
    expect(getByText(productsMock.items[0].description)).toBeInTheDocument();
  });
});
