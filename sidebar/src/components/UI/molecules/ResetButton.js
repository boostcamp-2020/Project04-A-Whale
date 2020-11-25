import React from 'react';
import StyledButton from '../atoms/StyledButton';

const ResetButton = ({ onClickHander }) => {
  const style = {
    margin: '15px',
    minWidth: '120px',
    minHeight: '30px',
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <StyledButton
      type="Text"
      style={style}
      variant="contained"
      content="전체 초기화"
      onClickHandler={onClickHander}
    />
  );
};

export default ResetButton;
