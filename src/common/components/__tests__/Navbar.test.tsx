import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from 'tests';
import { queryMock, productsMock } from '../../mocks';
import { Navbar } from '../Navbar';

let store: any;
beforeEach(() => {
  const initialState = {
    query: queryMock,
    products: productsMock,
    loading: false,
  };
  const mockStore = configureStore();
  store = mockStore(initialState);

  const spy = jest.spyOn(redux, 'useSelector');
  spy.mockReturnValue(initialState);

  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);
});

describe('Navbar', () => {
  test('Renders correctly', async () => {
    const { getByText, getByPlaceholderText } = render(
      <redux.Provider store={store}>
        <Navbar />
      </redux.Provider>
    );

    expect(getByText('logo.svg')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Promo')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
