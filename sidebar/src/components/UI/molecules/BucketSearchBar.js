import React from 'react';
import InputText from '../atoms/InputText';

const BucketSearchBar = ({ onChangeHandler }) => {
  const style = {
    color: 'inherit',
    margin: '15px',
  };
  return (
    <InputText
      style={style}
      variant="outlined"
      label="검색어를 입력해주세요"
      onChange={onChangeHandler}
    />
  );
};

export default BucketSearchBar;
