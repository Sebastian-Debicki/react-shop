import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Product } from 'common';
import { globalStyles } from 'core';
import { Button } from './Button';
import { Rating } from './Rating';

interface Prop {
  product: Product;
}

export const ProductItem: React.FC<Prop> = ({ product }) => {
  const classes = useStyles();

  return (
    <li className={classes.productContainer}>
      <div className={classes.imageContainer}>
        {product.promo && <p className={classes.promo}>Promo</p>}

        <img src={product.image} className={classes.image} alt='product' />
      </div>

      <div className={classes.descriptionContainer}>
        <div>
          <h4 className={classes.name}>{product.name}</h4>
          <p className={classes.description}>{product.description}</p>
        </div>

        <div>
          <Rating rating={product.rating} containerClassName={classes.rating} />

          <Button variant='filled'>Show details</Button>
        </div>
      </div>
    </li>
  );
};

const useStyles = makeStyles((theme) => ({
  productContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: globalStyles.borderRadius.normal,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  image: {
    borderTopLeftRadius: globalStyles.borderRadius.normal,
    borderTopRightRadius: globalStyles.borderRadius.normal,
    width: '100%',
    minHeight: '27rem',
  },
  descriptionContainer: {
    padding: '0.8rem 1.6rem 2.4rem',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: globalStyles.fontSize.big,
    marginBottom: '0.8rem',
  },
  description: {
    fontSize: globalStyles.fontSize.small,
    marginBottom: '3.5rem',
    lineHeight: '114%',
    color: theme.palette.text.secondary,
  },
  rating: {
    marginBottom: '1.8rem',
  },
  promo: {
    fontSize: globalStyles.fontSize.small,
    padding: '0.4rem 1.6rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    position: 'absolute',
    top: '2.5rem',
    left: '0',
  },
  imageContainer: {
    position: 'relative',
  },
}));
