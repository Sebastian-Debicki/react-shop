import React from 'react';

import { render } from 'tests';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(
      <Checkbox label='checkbox-test' checked={false} />
    );

    expect(getByText('checkbox-test')).toBeInTheDocument();
  });
});
