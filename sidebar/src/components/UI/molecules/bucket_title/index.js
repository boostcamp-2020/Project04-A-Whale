import React from 'react';
import TextField from '@material-ui/core/TextField';

const BucketDescription = ({ style, label, value, onChangeHandler }) => {
  return (
    <TextField
      style={style}
      variant="filled"
      label={label}
      onChange={onChangeHandler}
      value={value}
    />
  );
};

export default BucketDescription;
