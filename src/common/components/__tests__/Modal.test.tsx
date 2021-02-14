import React from 'react';

import { render } from 'tests';
import { Modal } from '../Modal';

describe('Input', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(
      <Modal onClose={jest.fn()} open={true}>
        <p>modal-test</p>
      </Modal>
    );

    expect(getByText('modal-test')).toBeInTheDocument();
  });
});
