import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from 'tests';
import { Login } from '../Login';

describe('Login', () => {
  test('Displays all informations', async () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const { getByText, getByPlaceholderText, getByAltText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(getByAltText('man on the bridge')).toBeInTheDocument();
    expect(getByText('logo.svg')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter password')).toBeInTheDocument();
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });
});
