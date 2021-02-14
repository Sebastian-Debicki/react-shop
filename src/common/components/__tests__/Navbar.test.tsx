import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from 'tests';
import { queryMock, productsMock } from '../../mocks';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  const initialState = {
    query: queryMock,
    products: productsMock,
    loading: false,
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const spy = jest.spyOn(redux, 'useSelector');
  spy.mockReturnValue(initialState);

  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  const wrapper = (
    <redux.Provider store={store}>
      <Navbar />
    </redux.Provider>
  );

  test('Displays all informations', async () => {
    const { getByText, getByPlaceholderText } = render(wrapper);

    expect(getByText('logo.svg')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Promo')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
