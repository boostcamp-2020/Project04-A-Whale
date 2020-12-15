import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  RegisterLayout,
  RegisterContainer,
  RegisterBox,
} from './style';

import useValidator from '../../../hooks/useValidator';
import * as validator from '../../../lib/validator';

const Login = ({ setRegisterInfo }) => {
  const classes = useStyles();

  const [id, idChange, idErrorMsg, idCheck] = useValidator(
    '',
    validator.isID,
    '아이디는 영문 숫자 조합 5~25자리.',
    validator.duplicatedID,
    '중복된 아이디입니다.'
  );
  const [password, passwordChange, passwordErrorMsg, passwordCheck] = useValidator(
    '',
    validator.isPassword,
    '숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력.'
  );

  const [nickname, nicknameChange, nicknameErrorMsg, nicknameCheck] = useValidator(
    '',
    validator.isNickname,
    '닉네임은 특수문자 제외 2자 이상'
  );
  const [description, descriptionChange] = useValidator('');

  const [
    passwordRepeat,
    passwordRepeatChange,
    passwordRepeatErrorMsg,
    ,
    setErrorMsg,
  ] = useValidator('', null);

  const passwordRepeatCheck = useCallback(() => {
    if (password !== passwordRepeat) {
      setErrorMsg('패스워드가 일치하지 않습니다.');
      return false;
    }
    setErrorMsg('');
    return true;
  }, [password, passwordRepeat]);

  const submitClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (idCheck() && passwordCheck() && passwordRepeatCheck() && nicknameCheck()) {
        setRegisterInfo({ id, password, nickname, description });
      }
    },
    [id, password, passwordRepeat, nickname, description]
  );

  const history = useHistory();
  const goBack = useCallback(() => history.goBack(), []);

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
      <RegisterLayout>
        <RegisterContainer>
          <RegisterBox>
            <form onSubmit={submitClickHandler}>
              <TextField
                required
                className={classes.input}
                label="아이디"
                variant="outlined"
                onChange={idChange}
                onBlur={idCheck}
                error={idErrorMsg}
                helperText={idErrorMsg}
              />
              <TextField
                required
                className={classes.input}
                label="패스워드"
                type="password"
                variant="outlined"
                onChange={passwordChange}
                onBlur={passwordCheck}
                error={passwordErrorMsg}
                helperText={passwordErrorMsg}
              />
              <TextField
                required
                className={classes.input}
                label="패스워드 확인"
                type="password"
                variant="outlined"
                onChange={passwordRepeatChange}
                onBlur={passwordRepeatCheck}
                error={passwordRepeatErrorMsg}
                helperText={passwordRepeatErrorMsg}
              />
              <TextField
                required
                className={classes.input}
                label="닉네임"
                variant="outlined"
                onChange={nicknameChange}
                onBlur={nicknameCheck}
                error={nicknameErrorMsg}
                helperText={nicknameErrorMsg}
              />
              <TextField
                className={classes.input}
                label="소개"
                variant="outlined"
                onChange={descriptionChange}
              />
              <Button
                className={classes.outlineButton}
                variant="outlined"
                color="primary"
                onClick={goBack}
              >
                취소
              </Button>
              <Button
                className={classes.outlineButton}
                variant="outlined"
                color="secondary"
                type="submit"
              >
                가입
              </Button>
            </form>
            {/* <Link className={classes.link} to="/">
              <Button className={classes.naverButton} variant="contained">
                Naver 아이디로 회원가입
              </Button>
            </Link> */}
          </RegisterBox>
        </RegisterContainer>
      </RegisterLayout>
    </>
  );
};

export default Login;
