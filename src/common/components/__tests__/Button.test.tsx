import React from 'react';

import { render } from 'tests';
import { Button } from '../Button';

describe('Button', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(<Button variant='filled'>button-test</Button>);

    expect(getByText('button-test')).toBeInTheDocument();
  });

  test('Renders filled button variant', async () => {
    const { getByText } = render(<Button variant='filled'>button-test</Button>);

    expect(getByText('button-test').className).toContain('filled');
    expect(getByText('button-test').className).not.toContain('outline');
  });

  test('Renders outline button variant', async () => {
    const { getByText } = render(
      <Button variant='outline'>button-test</Button>
    );

    expect(getByText('button-test').className).toContain('outline');
    expect(getByText('button-test').className).not.toContain('filled');
  });

  test('Display correct text when is disabled', async () => {
    const { getByText } = render(
      <Button variant='filled' disabled={true}>
        button-test
      </Button>
    );

    expect(getByText('Unavailable')).toBeInTheDocument();
  });
});
