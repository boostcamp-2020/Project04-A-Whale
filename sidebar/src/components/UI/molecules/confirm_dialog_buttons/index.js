import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const ConfirmDialogButtons = ({ handleClick, handleClose }) => {
  return (
    <DialogActions>
      <Button onClick={handleClick} color="primary">
        확인
      </Button>
      <Button onClick={handleClose} color="primary" autoFocus>
        취소
      </Button>
    </DialogActions>
  );
};

export default ConfirmDialogButtons;
