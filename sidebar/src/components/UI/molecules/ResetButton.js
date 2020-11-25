import React from 'react';
import { connect } from 'react-redux';
import StyledButton from '../atoms/StyledButton';
import { resetBucketAction } from '../../../modules/actions/createbucket';

const ResetButton = ({ resetBucketActionConnect, onReset }) => {
  const style = {
    margin: '15px',
    minWidth: '120px',
    minHeight: '30px',
    color: 'white',
    fontWeight: 'bold',
  };

  const clickResetButton = () => {
    resetBucketActionConnect();
    onReset();
  };

  return (
    <StyledButton
      type="Text"
      style={style}
      variant="contained"
      content="전체 초기화"
      onClickHandler={clickResetButton}
    />
  );
};

export default connect(null, { resetBucketActionConnect: resetBucketAction })(ResetButton);
