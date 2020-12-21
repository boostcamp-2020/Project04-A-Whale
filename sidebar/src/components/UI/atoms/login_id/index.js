import React from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from './style';

const LoginId = ({ id, idChangeHandler, idValid }) => {
  const classes = useStyles();

  return (
    <TextField
      required
      className={classes.input}
      label="아이디"
      variant="outlined"
      onChange={idChangeHandler}
      onBlur={idValid}
      autoFocus
      error={!id.valid}
      helperText={!id.valid ? '아이디를 입력해주세요.' : ''}
    />
  );
};

export default LoginId;
