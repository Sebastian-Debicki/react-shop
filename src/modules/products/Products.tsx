import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { getProducts, productsSelector } from 'store';
import { Modal, Navbar, Pagination, Product, Spinner } from 'common';
import { ProductItem, ProductDetails } from './components';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const [choosenProduct, setChoosenProduct] = useState<Product | undefined>();
  const [query, setQuery] = useState({
    limit: 8,
    page: 1,
    search: '',
    active: false,
    promo: false,
  });

  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts(query));
  }, [dispatch, query]);

  return (
    <>
      <section className={classes.mainContainer}>
        <div>
          <Navbar
            onInputChange={(search) => setQuery({ ...query, search })}
            onCheckActive={(active) => setQuery({ ...query, active })}
            onCheckPromo={(promo) => setQuery({ ...query, promo })}
          />

          {products.loading ? (
            <Spinner />
          ) : (
            <ul className={classes.productsContainer}>
              {products.loaded?.items.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onButtonClick={(choosenProduct: Product) =>
                    setChoosenProduct(choosenProduct)
                  }
                />
              ))}
            </ul>
          )}
        </div>

        <Pagination
          numberOfPages={products.loaded?.meta.totalPages}
          onChangePage={(page) => setQuery({ ...query, page })}
        />
      </section>

      <Modal
        open={choosenProduct !== undefined}
        onClose={() => setChoosenProduct(undefined)}
      >
        {choosenProduct && (
          <ProductDetails
            product={choosenProduct}
            onClose={() => setChoosenProduct(undefined)}
          />
        )}
      </Modal>
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
}));
