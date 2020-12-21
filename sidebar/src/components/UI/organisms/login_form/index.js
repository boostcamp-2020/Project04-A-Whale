import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LoginId from '../../atoms/login_id';
import LoginPassword from '../../atoms/login_password';
import SubmitButton from '../../atoms/submit_button';
import { useStyles, LoginLayout, LoginContainer, LoginBox } from './style';

const LoginForm = ({ setLoginInfo }) => {
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
    <LoginLayout>
      <LoginContainer>
        <LoginBox>
          <form onSubmit={submitClickHandler}>
            <LoginId id={id} idChangeHandler={idChangeHandler} idValid={idValid} />
            <LoginPassword
              password={password}
              passwordChangeHandler={passwordChangeHandler}
              passwordValid={passwordValid}
            />
            <SubmitButton buttonName="로그인" />
            <Link className={classes.link} to="/register">
              <Button className={classes.outlineButton} variant="outlined" color="primary">
                회원가입
              </Button>
            </Link>
          </form>
        </LoginBox>
      </LoginContainer>
    </LoginLayout>
  );
};

export default LoginForm;
