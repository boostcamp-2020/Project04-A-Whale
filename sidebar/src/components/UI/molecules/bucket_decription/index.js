import React from 'react';
import TextField from '@material-ui/core/TextField';

const BucketDescription = ({ style, label, value, onChangeHandler }) => {
  return (
    <TextField
      style={style}
      label={label}
      rows={4}
      rowsMax={9}
      onChange={onChangeHandler}
      value={value}
      multiline
      variant="outlined"
    />
  );
};

export default BucketDescription;
