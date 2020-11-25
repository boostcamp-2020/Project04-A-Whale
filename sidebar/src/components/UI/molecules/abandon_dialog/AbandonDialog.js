import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles(() => ({
  dialogContent: {
    width: '400px',
  },
}));

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
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          확인
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AbandonDialog;
