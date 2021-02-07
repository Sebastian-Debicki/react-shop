import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { getProducts, productsSelector } from 'store';
import { Navbar, ProductItem } from 'common';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products.loading ? (
        <p>loading...</p>
      ) : products.errored ? (
        <p>error</p>
      ) : (
        <section>
          <Navbar />
          <ul className={classes.productsContainer}>
            {products.loaded &&
              products.loaded.items.map((product) => (
                <ProductItem product={product} />
              ))}
          </ul>
        </section>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  productsContainer: {
    listStyle: 'none',
    paddingInlineStart: '0',
    margin: '2.4rem',
    display: 'grid',
    gap: '2.4rem',
    justifyContent: 'center',
    gridTemplateColumns: '1fr',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    [theme.breakpoints.up('lg')]: {
      gap: '3.2rem 2.4rem',
      margin: '5.6rem 10.8rem',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}));
