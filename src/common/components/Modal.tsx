import React from 'react';
import {
  makeStyles,
  createStyles,
  Modal as MaterialModal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { globalStyles } from 'core';
import { hexWithOpacity } from 'common/helpers';

interface Props {
  onClose: () => void;
  open: boolean;
}

export const Modal: React.FC<Props> = ({ children, onClose, open }) => {
  const classes = useStyles();

  return (
    <MaterialModal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={() => (
        <Backdrop open={open} className={classes.backdrop} onClick={onClose} />
      )}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.content}>{children}</div>
      </Fade>
    </MaterialModal>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      margin: '0 auto',
    },
    content: {
      backgroundColor: theme.palette.common.white,
      border: 'none',
      outline: 'none',
      borderRadius: globalStyles.borderRadius.normal,
    },
    backdrop: {
      backgroundColor: hexWithOpacity(theme.palette.text.primary, 0.9),
    },
  })
);
