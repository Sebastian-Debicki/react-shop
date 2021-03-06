import React from 'react';

import { render } from 'tests';
import { Spinner } from '../Spinner';

describe('Spinner', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(<Spinner />);

    expect(getByText('spinner.svg')).toBeInTheDocument();
  });
});
