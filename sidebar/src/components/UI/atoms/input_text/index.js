import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const InputText = ({
  style,
  variant,
  label,
  value,
  defaultValue,
  onChangeHandler,
  InputProps,
  type,
  isMultiline,
}) => {
  const useStyles = makeStyles({
    root: style,
  });

  const classes = useStyles();
  return (
    <TextField
      type={type}
      className={classes.root}
      variant={variant}
      label={label}
      value={value}
      defaultValue={defaultValue}
      onChange={onChangeHandler}
      InputProps={InputProps}
      multiline={isMultiline}
    />
  );
};

export default InputText;
