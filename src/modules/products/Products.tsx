import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { getProducts, productsSelector } from 'store';
import { Navbar, Pagination, ProductItem, Spinner } from 'common';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const [page, setPage] = useState(1);

  const classes = useStyles(products.loading);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <>
      <section className={classes.mainContainer}>
        <div>
          <Navbar />

          {products.loading ? (
            <Spinner />
          ) : (
            <ul className={classes.productsContainer}>
              {products.loaded?.items.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>

        <Pagination
          numberOfPages={products.loaded?.meta.totalPages}
          onChangePage={setPage}
        />
      </section>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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
  pagination: {
    display: 'none',
  },
}));
