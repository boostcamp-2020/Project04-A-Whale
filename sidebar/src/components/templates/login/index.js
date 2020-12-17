import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TitleLogo from '../../UI/molecules/title_logo';

import { useStyles, LoginLayout, LoginContainer, LoginBox, LoginWrapper } from './style';

const Login = ({ setLoginInfo }) => {
  const classes = useStyles();
  const [id, setId] = useState({ text: '', valid: true });
  const [password, setPassword] = useState({ text: '', valid: true });

  const idChangeHandler = useCallback((e) => setId({ ...id, text: e.target.value }), [id]);

  const passwordChangeHandler = useCallback(
    (e) => setPassword({ ...password, text: e.target.value }),
    [password]
  );

  const idValid = useCallback(() => {
    if (!id.text) {
      setId({ ...id, valid: false });
      return false;
    }
    setId({ ...id, valid: true });
    return true;
  }, [id]);

  const passwordValid = useCallback(() => {
    if (!password.text) {
      setPassword({ ...password, valid: false });
      return false;
    }
    setPassword({ ...password, valid: true });
    return true;
  }, [password]);

  const submitClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (idValid() && passwordValid()) {
        setLoginInfo({ id: id.text, password: password.text });
      }
    },
    [id, password]
  );
  return (
    <LoginWrapper className={classes.root}>
      <TitleLogo />
      <LoginLayout>
        <LoginContainer>
          <LoginBox>
            <form onSubmit={submitClickHandler}>
              <TextField
                required
                className={classes.input}
                label="아이디"
                variant="outlined"
                onChange={idChangeHandler}
                onBlur={idValid}
                autoFocus
                error={!id.valid}
                helperText={id.valid ? '아이디를 입력해주세요.' : ''}
              />
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
                helperText={password.valid ? '패스워드를 입력해주세요.' : ''}
              />
              <Button
                className={classes.outlineButton}
                variant="outlined"
                color="primary"
                type="submit"
              >
                로그인
              </Button>
              <Link className={classes.link} to="/register">
                <Button className={classes.outlineButton} variant="outlined" color="primary">
                  회원가입
                </Button>
              </Link>
            </form>
          </LoginBox>
        </LoginContainer>
      </LoginLayout>
    </LoginWrapper>
  );
};

export default Login;
