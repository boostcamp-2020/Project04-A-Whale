import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useDispatch } from 'react-redux';
import DialogContentText from '@material-ui/core/DialogContentText';
import { updateBucketStatus } from '../../../../modules/buckets';
import ConfirmDialogButtons from '../../molecules/confirm_dialog_buttons';
import useStyles from './style';
import { OPEN, GIVEUP } from '../../../../constants/status';

const ConfirmDialog = ({ open, handleClose, bucket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getText = () => {
    if (bucket.status === GIVEUP) return '정말 되돌리시겠습니까?';
    if (bucket.status === OPEN) return '정말 포기하시겠습니까?';
    return null;
  };

  const handleClick = () => {
    handleClose();
    const params = {};
    params.no = bucket.no;
    if (bucket.status === OPEN) params.status = GIVEUP;
    if (bucket.status === GIVEUP) params.status = OPEN;
    dispatch(updateBucketStatus(params));
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
      <ConfirmDialogButtons handleClick={handleClick} handleClose={handleClose} />
    </Dialog>
  );
};

export default ConfirmDialog;
