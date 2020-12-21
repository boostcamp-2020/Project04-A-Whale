import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './style';

const LoginPassword = ({ password, passwordChangeHandler, passwordValid }) => {
  const classes = useStyles();

  return (
    <TextField
      required
      className={classes.input}
      label="패스워드"
      type="password"
      autoComplete="current-password"
      variant="outlined"
      onChange={passwordChangeHandler}
      onBlur={passwordValid}
      error={!password.valid}
      helperText={!password.valid ? '패스워드를 입력해주세요.' : ''}
    />
  );
};

export default LoginPassword;
