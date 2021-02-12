import React from 'react';

import { render } from 'tests';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  test('Displays all informations', async () => {
    const { getByText } = render(
      <Pagination page={1} numberOfPages={10} onChangePage={jest.fn()} />
    );

    expect(getByText('first')).toBeInTheDocument();
    expect(getByText('last')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('…')).toBeInTheDocument();
  });
});
