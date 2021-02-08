import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Close } from 'assets/icons';
import { Product } from 'common';
import { globalStyles } from 'core';

interface Props {
  product: Product;
  onClose: () => void;
}

export const ProductDetails: React.FC<Props> = ({ product, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <button className={classes.closeButton} onClick={onClose}>
        <Close />
      </button>

      <img src={product.image} alt='product' className={classes.image} />

      <div className={classes.descriptionContainer}>
        <h3 className={classes.name}>{product.name}</h3>
        <p className={classes.description}>{product.description}</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    borderRadius: globalStyles.borderRadius.normal,
    width: '56rem',
  },
  image: {
    borderTopLeftRadius: globalStyles.borderRadius.normal,
    borderTopRightRadius: globalStyles.borderRadius.normal,
    width: '100%',
    height: '32rem',
    objectFit: 'cover',
    objectPosition: '20% 10%',
  },
  name: {
    fontSize: globalStyles.fontSize.header3,
  },
  description: {
    lineHeight: '133%',
    fontSize: globalStyles.fontSize.big,
    color: theme.palette.text.secondary,
  },
  descriptionContainer: {
    padding: '0 3.2rem 5rem',
  },
  closeButton: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    padding: '0.9rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
  },
}));
