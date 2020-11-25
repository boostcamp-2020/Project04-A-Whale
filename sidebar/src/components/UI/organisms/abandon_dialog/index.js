import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import AbandonDialogButtons from '../../molecules/abandon_dialog_buttons';
import useStyles from './style';

const AbandonDialog = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={classes.dialogContent}>
        <DialogContentText id="alert-dialog-description">정말 포기하시겠습니까?</DialogContentText>
      </DialogContent>
      <AbandonDialogButtons handleClose={handleClose} />
    </Dialog>
  );
};

export default AbandonDialog;
