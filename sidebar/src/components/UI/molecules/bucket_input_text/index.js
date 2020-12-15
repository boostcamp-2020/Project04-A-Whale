import React from 'react';
import InputText from '../../atoms/input_text';

const BucketInputText = ({ style, label, changeInputText, value, isMultiline }) => {
  return (
    <InputText
      style={style}
      variant="outlined"
      label={label}
      value={value}
      onChangeHandler={changeInputText}
      isMultiline={isMultiline}
    />
  );
};

export default BucketInputText;
