import React from 'react';

import { render } from 'tests';
import { Input } from '../Input';

describe('Input', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(<Input label='input-test' />);

    expect(getByText('input-test')).toBeInTheDocument();
  });

  test('Renders search svg icon when pass withSearchIcon prop', async () => {
    const { getByText } = render(<Input label='input-test' withSearchIcon />);

    expect(getByText('search.svg')).toBeInTheDocument();
  });
});
