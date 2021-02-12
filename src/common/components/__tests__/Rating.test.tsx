import React from 'react';

import { render } from 'tests';
import { Rating } from '../Rating';

describe('Pagination', () => {
  test('Displays correct numbers of stars', async () => {
    const { getAllByText } = render(<Rating rating={3} />);

    expect(getAllByText('star-filled.svg').length).toBe(3);
    expect(getAllByText('star-empty.svg').length).toBe(2);
  });
});
