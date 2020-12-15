import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ConfirmDialogButtons from '../confirm_dialog_buttons';
import useStyles from './style';

const ConfirmDialog = ({ open, handleClose, handleClick, text, subText }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={classes.dialogContent}>
        <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
        {subText ? (
          <DialogContentText className={classes.subText}>({subText})</DialogContentText>
        ) : null}
      </DialogContent>
      <ConfirmDialogButtons handleClick={handleClick} handleClose={handleClose} />
    </Dialog>
  );
};

export default ConfirmDialog;
