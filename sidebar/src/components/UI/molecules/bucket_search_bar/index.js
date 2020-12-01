import React from 'react';
import InputText from '../../atoms/input_text';

const BucketSearchBar = ({ onChangeHandler }) => {
  const style = {
    color: 'inherit',
    margin: '15px',
  };

  // TODO : onChangeHandler 검색기능 구현에서 추후 구현
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
