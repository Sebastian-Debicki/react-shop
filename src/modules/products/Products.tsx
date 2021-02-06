import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing';
import { getProducts, productsSelector } from 'store';
import { Navbar } from 'common';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.loading ? (
        <p>loading...</p>
      ) : products.errored ? (
        <p>error</p>
      ) : (
        <div>
          <Navbar />
          <h2>Products page</h2>
          <Link to={AppRoute.login}> Login </Link>
        </div>
      )}
    </>
  );
};
