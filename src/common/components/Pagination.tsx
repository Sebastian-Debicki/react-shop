import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { usePagination } from '@material-ui/lab/Pagination';

interface Props {
  numberOfPages?: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  numberOfPages,
  onChangePage,
}) => {
  const classes = useStyles();

  const { items } = usePagination({
    count: numberOfPages,
    hidePrevButton: true,
    hideNextButton: true,
    showFirstButton: true,
    showLastButton: true,
    onChange: (_e, value) => onChangePage(value),
  });

  return (
    <nav className={classes.container}>
      <ul className={classes.list}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          if (type === 'start-ellipsis' || type === 'end-ellipsis')
            children = '…';
          else if (type === 'page')
            children = (
              <button
                className={`${classes.button} ${classes.numberButton} ${
                  selected && classes.numberButtonActive
                }`}
                type='button'
                {...item}
              >
                {page}
              </button>
            );
          else
            children = (
              <button
                className={`${classes.button} ${classes.lastFirstButton}`}
                type='button'
                {...item}
              >
                {type}
              </button>
            );

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5.6rem',
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    textTransform: 'capitalize',
  },
  lastFirstButton: {
    margin: '0 2.5rem',
  },
  numberButton: {
    margin: '0 0.8rem',
  },
  numberButtonActive: {
    color: theme.palette.primary.main,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
}));
