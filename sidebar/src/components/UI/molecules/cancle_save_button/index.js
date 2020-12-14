import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BlockIcon from '@material-ui/icons/Block';
import ButtonWrapper from './style';

const CancelSaveButton = ({ handleCancel, handleSave }) => {
  return (
    <ButtonWrapper>
      <Button
        style={{ marginRight: '10px', background: '#e85a71', color: '#fff' }}
        variant="contained"
        startIcon={<BlockIcon />}
        onClick={handleCancel}
      >
        취소
      </Button>
      <Button
        style={{ color: '#fff' }}
        variant="contained"
        color="secondary"
        startIcon={<SaveIcon />}
        onClick={handleSave}
      >
        저장
      </Button>
    </ButtonWrapper>
  );
};

export default CancelSaveButton;
