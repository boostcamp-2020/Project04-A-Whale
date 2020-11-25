import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const InputText = ({ style, variant, label, defaultValue, onChangeHandler, InputProps }) => {
  const useStyles = makeStyles({
    root: style,
  });

  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      variant={variant}
      label={label}
      defaultValue={defaultValue}
      onChange={onChangeHandler}
      InputProps={InputProps}
      multiline="true"
      rowsMax={4}
    />
  );
};

export default InputText;
