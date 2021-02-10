import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { getProducts, productsSelector, changeQuery } from 'store';
import {
  Modal,
  Navbar,
  Pagination,
  Product,
  Spinner,
  NothingFound,
} from 'common';
import { ProductItem, ProductDetails } from './components';

export const Products = () => {
  const dispatch = useDispatch();
  const { query, loading, products } = useSelector(productsSelector);
  const [choosenProduct, setChoosenProduct] = useState<Product | undefined>();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts(query));
  }, [dispatch, query]);

  return (
    <>
      <section className={classes.mainContainer}>
        <Navbar />

        <>
          {loading ? (
            <Spinner />
          ) : products?.items.length === 0 ? (
            <NothingFound />
          ) : (
            <>
              <ul className={classes.productsContainer}>
                {products?.items.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    onButtonClick={(choosenProduct: Product) =>
                      setChoosenProduct(choosenProduct)
                    }
                  />
                ))}
              </ul>
              <Pagination
                page={query.page}
                numberOfPages={products?.meta.totalPages}
                onChangePage={(page) =>
                  dispatch(changeQuery({ ...query, page }))
                }
              />
            </>
          )}
        </>
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
  },
  productsContainer: {
    listStyle: 'none',
    paddingInlineStart: '0',
    margin: '2.4rem 2.4rem 4rem',
    display: 'grid',
    gap: '2.4rem',
    justifyContent: 'center',
    gridTemplateColumns: '1fr',
    maxWidth: '122.4rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    [theme.breakpoints.up('lg')]: {
      gap: '3.2rem 2.4rem',
      margin: '5.6rem auto',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}));
