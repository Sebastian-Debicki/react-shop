import React from 'react';
import {
  makeStyles,
  createStyles,
  Modal as MaterialModal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { globalStyles } from 'core';

interface Props {
  onClose: () => void;
  open: boolean;
}

export const Modal: React.FC<Props> = ({ children, onClose, open }) => {
  const classes = useStyles();

  return (
    <div>
      <MaterialModal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={() => (
          <Backdrop
            open={open}
            className={classes.backdrop}
            onClick={onClose}
          />
        )}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.content}>{children}</div>
        </Fade>
      </MaterialModal>
    </div>
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
      backgroundColor: `#1A1B1De9`,
    },
  })
);
