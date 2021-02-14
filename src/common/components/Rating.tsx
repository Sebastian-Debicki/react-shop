import React from 'react';
import { makeStyles } from '@material-ui/core';

import { StarFilled, StarEmpty } from 'assets/icons';

interface Props {
  rating: number;
  containerClassName?: string;
}

export const Rating: React.FC<Props> = ({ rating, containerClassName }) => {
  const classes = useStyles();

  return (
    <div className={`${containerClassName} ${classes.container}`}>
      {[1, 2, 3, 4, 5].map((rate) =>
        rate <= rating ? <StarFilled key={rate} /> : <StarEmpty key={rate} />
      )}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    gap: '1.5rem',
  },
}));
