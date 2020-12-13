import React from 'react';
import { InputLabel, TextField } from '@material-ui/core';

const BucketTitle = ({ style, label, value, onChangeHandler }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField style={style} onChange={onChangeHandler} value={value} />
    </>
  );
};

export default BucketTitle;
