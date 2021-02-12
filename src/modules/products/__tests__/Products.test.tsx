import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from 'tests';
import { queryMock, productsMock } from 'common';
import { Products } from '../Products';

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

describe('Products', () => {
  test('Renders navbar elements', async () => {
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );

    expect(getByText('logo.svg')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getAllByText('Promo')[0]).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });

  test('Renders list item elements', async () => {
    const { getByText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );
    expect(getByText(productsMock.items[0].name)).toBeInTheDocument();
    expect(getByText(productsMock.items[0].description)).toBeInTheDocument();
    expect(getByText(productsMock.items[1].name)).toBeInTheDocument();
    expect(getByText(productsMock.items[1].description)).toBeInTheDocument();
    expect(getByText(productsMock.items[2].name)).toBeInTheDocument();
    expect(getByText(productsMock.items[2].description)).toBeInTheDocument();
  });

  test('Renders correct number of list items', async () => {
    const { getAllByAltText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );

    expect(getAllByAltText('product').length).toBe(3);
  });

  test('Renders correct number of list items', async () => {
    const { getAllByAltText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );

    expect(getAllByAltText('product').length).toBe(productsMock.items.length);
  });

  test('Renders correct number of active buttons', async () => {
    const { getAllByText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );

    expect(getAllByText('Show details').length).toBe(
      productsMock.items.filter((p) => p.active).length
    );
  });

  test('Renders correct number of unactive buttons', async () => {
    const { getAllByText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );

    expect(getAllByText('Unavailable').length).toBe(
      productsMock.items.filter((p) => !p.active).length
    );
  });

  test('Renders correct number of promo elements', async () => {
    const { getAllByText } = render(
      <redux.Provider store={store}>
        <Products />
      </redux.Provider>
    );

    // +1 means that is one more Promo text in navbar checkbox label
    expect(getAllByText('Promo').length).toBe(
      productsMock.items.filter((p) => p.promo).length + 1
    );
  });
});
