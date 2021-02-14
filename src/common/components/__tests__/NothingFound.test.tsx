import React from 'react';

import { render } from 'tests';
import { NothingFound } from '../NothingFound';

describe('NothingFound', () => {
  test('Displays all informations', async () => {
    const { getByText } = render(<NothingFound />);

    expect(getByText('empty.svg')).toBeInTheDocument();
    expect(getByText('Ooops… It’s empty here')).toBeInTheDocument();
    expect(getByText('There are no products on the list')).toBeInTheDocument();
  });
});
