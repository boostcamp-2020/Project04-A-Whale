import React from 'react';
import StyledButton from '../../atoms/styled_button/StyledButton';

const BucketCreateButton = ({ onClickHander }) => {
  const style = {
    margin: '15px',
    minWidth: '120px',
    minHeight: '30px',
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <StyledButton
      type="Text"
      style={style}
      variant="contained"
      content="추가"
      onClickHandler={onClickHander}
    />
  );
};

export default BucketCreateButton;
