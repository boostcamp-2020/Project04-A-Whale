import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const InputText = ({ style, variant, label, value, defaultValue, onChangeHandler, InputProps }) => {
  const useStyles = makeStyles({
    root: style,
  });

  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      variant={variant}
      label={label}
      value={value}
      defaultValue={defaultValue}
      onChange={onChangeHandler}
      InputProps={InputProps}
      multiline
    />
  );
};

export default InputText;
