import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing';
import { getProducts, productsSelector } from 'store';

export const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {state.products.loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h2>Products page</h2>
          <Link to={AppRoute.login}> Login </Link>
        </>
      )}
    </>
  );
};
