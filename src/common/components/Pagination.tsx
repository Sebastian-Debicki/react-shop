import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { usePagination } from '@material-ui/lab/Pagination';

interface Props {
  numberOfPages?: number;
  page: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  numberOfPages,
  page,
  onChangePage,
}) => {
  const classes = useStyles();

  const { items } = usePagination({
    page,
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
          if (type === 'start-ellipsis' || type === 'end-ellipsis')
            return <li key={index}>…</li>;
          else if (type === 'page')
            return (
              <li key={index}>
                <button
                  className={`${classes.button} ${classes.numberButton} ${
                    selected && classes.numberButtonActive
                  }`}
                  type='button'
                  {...item}
                >
                  {page}
                </button>
              </li>
            );
          else
            return (
              <li key={index}>
                <button
                  className={`${classes.button} ${classes.lastFirstButton}`}
                  type='button'
                  {...item}
                >
                  {type}
                </button>
              </li>
            );
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
    margin: '0 1rem',

    [theme.breakpoints.up('sm')]: {
      margin: '0 2.5rem',
    },
  },
  numberButton: {
    margin: '0 0.2rem',

    [theme.breakpoints.up('sm')]: {
      margin: '0 0.8rem',
    },
  },
  numberButtonActive: {
    color: theme.palette.primary.main,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
