import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useValidator from '../../../../hooks/useValidator';
import * as validator from '../../../../lib/validator';
import SubmitButton from '../../atoms/submit_button';
import { useStyles, RegisterLayout, RegisterContainer, RegisterBox } from './style';

const RegisterForm = ({ setRegisterInfo }) => {
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
                error={!!idErrorMsg}
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
                error={!!passwordErrorMsg}
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
                error={!!passwordRepeatErrorMsg}
                helperText={passwordRepeatErrorMsg}
              />
              <TextField
                required
                className={classes.input}
                label="닉네임"
                variant="outlined"
                onChange={nicknameChange}
                onBlur={nicknameCheck}
                error={!!nicknameErrorMsg}
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
              <SubmitButton buttonName="가입" />
            </form>
          </RegisterBox>
        </RegisterContainer>
      </RegisterLayout>
    </>
  );
};

export default RegisterForm;
