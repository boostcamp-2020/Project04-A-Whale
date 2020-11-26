import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const AbandonDialogButtons = ({ handleClose }) => {
  return (
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        확인
      </Button>
      <Button onClick={handleClose} color="primary" autoFocus>
        취소
      </Button>
    </DialogActions>
  );
};

export default AbandonDialogButtons;
