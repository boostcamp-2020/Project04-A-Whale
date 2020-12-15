import React from 'react';
import { TextField } from '@material-ui/core';

const BucketTitle = ({ style, label, value, onChangeHandler }) => {
  return (
    <>
      <TextField
        required
        style={style}
        label={label}
        onChange={onChangeHandler}
        value={value}
        variant="outlined"
      />
    </>
  );
};

export default BucketTitle;
