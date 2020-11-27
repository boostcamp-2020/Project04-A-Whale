import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ConfirmDialogButtons from '../../molecules/confirm_dialog_buttons';
import useStyles from './style';

const ConfirmDialog = ({ open, handleClose, status }) => {
  const classes = useStyles();

  const getText = () => {
    if (status === 'G') return '정말 되돌리시겠습니까?';
    if (status === 'O') return '정말 포기하시겠습니까?';
    return null;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={classes.dialogContent}>
        <DialogContentText id="alert-dialog-description">{getText()}</DialogContentText>
      </DialogContent>
      <ConfirmDialogButtons handleClose={handleClose} />
    </Dialog>
  );
};

export default ConfirmDialog;
