import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputText from '../atoms/InputText';

const BucketInputText = ({ style, label, changeInputText, value }) => {
  return (
    <InputText
      style={style}
      variant="outlined"
      label={label}
      value={value}
      onChangeHandler={changeInputText}
    />
  );
};

export default BucketInputText;
