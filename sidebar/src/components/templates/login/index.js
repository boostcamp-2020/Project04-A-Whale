import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  useStyles,
  LogoWrapper,
  AppTitle,
  WhaleWrapper,
  WhaleLogo,
  WhaleLight,
  CloudWrapper,
  Cloud1,
  Cloud2,
  Cloud3,
  Cloud4,
  LoginLayout,
  LoginContainer,
  LoginBox,
} from './style';

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
    <>
      <LogoWrapper>
        <AppTitle>올해는 꼭</AppTitle>
        <WhaleWrapper>
          <WhaleLogo src="whale_logo.png" alt="whale-logo" />
          <WhaleLight
            style={{
              borderRadius: '50%',
              width: '140px',
              height: '140px',
              backgroundColor: 'rgba(149, 243, 255, 0.2)',
            }}
          />
          <WhaleLight
            style={{
              borderRadius: '50%',
              width: '160px',
              height: '160px',
              backgroundColor: 'rgba(149, 243, 255, 0.2)',
            }}
          />
        </WhaleWrapper>
        <CloudWrapper>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 750 500"
            preserveAspectRatio="xMidYMax slice"
          >
            <rect
              className="mask"
              width="750"
              height="200"
              opacity="0.8"
              fill="#ffffff"
              transform="translate(0 400)"
            />
            <g className="clouds" fill="#dddddd">
              <Cloud4 d="M402.34,341.68c9.9-10.24,23.76-7.43,36.05-5.48C448,332,458.88,329,468.9,334c-.95-7.91,8.65-14.92,15.9-11.61-3.34-11.77,13-13.9,20.53-8.34A13.53,13.53,0,0,1,522,310.16c2.64-18.11,27.85-24.13,38.38-9.17,3.54-5.51,12.12-6.88,17.2-2.74,6.59-43.22,70.78-27.93,65.83,12.62,14.7-4.43,32,6.72,34.08,21.93,5.76-2.23,29.28,1,21.76,9.26" />
              <Cloud3 d="M382.94,363.16c-7-10.5-18.72-9.06-28.19-4.53-12.19-6.71-26.73-11.74-39.62-3.13,1-15.45-18-25.51-28-12.41-14.59-29.67-56.68-34.41-72-3.09-1.41,4-4.73,6.07-8.1,2.88-23.13-25.66-57.12-30.25-67.73,8.21-13.05-1.88-33.42-9.15-37.47,10.07a38.08,38.08,0,0,0-36.36,2.11" />
              <Cloud2 d="M506.86,233.56c9.62-3.21,23.27-4,33.88-2.17,0-5.7,10.4-6.68,14-3.58,10.32-12.45,29.93-5.12,40.08,0,10.06-6.52,27.67-9.72,33.93,2.42,5.53-.13,15.88-3.23,18.8,2.94a31.53,31.53,0,0,1,18.21.64" />
              <Cloud1 d="M402.18,271.3c-7.57-7.46-18.46-7.52-28.05-5.3-6.75-8.79-20.54-13.18-27.24-1.45-10.4-11.06-30.66-24.2-37.74-2.24a13.1,13.1,0,0,0-17.76,1.47c-11.23-25.69-58.46-41.29-64.24-4.06-9-8.26-20.15-2.62-27.47,4.4-11-2.87-22.18-7.58-31.72,2.7-8.44-.75-18.1-2.8-24.71,4.57" />
            </g>
          </svg>
        </CloudWrapper>
      </LogoWrapper>
      <LoginLayout>
        <LoginContainer>
          <LoginBox>
            <form onSubmit={submitClickHandler}>
              <TextField
                className={classes.input}
                label="아이디"
                variant="outlined"
                onChange={idChangeHandler}
                onBlur={idValid}
                autoFocus
                error={!id.valid}
                helperText={id.valid || '아이디를 입력해주세요.'}
              />
              <TextField
                className={classes.input}
                label="패스워드"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={passwordChangeHandler}
                onBlur={passwordValid}
                error={!password.valid}
                helperText={password.valid || '패스워드를 입력해주세요.'}
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
            <Link className={classes.link} to="/">
              <Button className={classes.naverButton} variant="contained">
                Naver 아이디로 로그인
              </Button>
            </Link>
          </LoginBox>
        </LoginContainer>
      </LoginLayout>
    </>
  );
};

export default Login;
