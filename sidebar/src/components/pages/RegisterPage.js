import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Register from '../templates/register';
import { userRegister } from '../../lib/api';

const RegisterPage = () => {
  const history = useHistory();
  const [registerInfo, setRegisterInfo] = useState({
    id: '',
    password: '',
    nickname: '',
    description: '',
  });
  const resetRegisterInfo = () => {
    setRegisterInfo({ id: '', password: '', nickname: '', description: '' });
  };

  const axiosRegister = useCallback(async (body) => {
    await userRegister(body);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      history.replace('/');
    }
  }, []);
  useEffect(() => {
    if (registerInfo.id && registerInfo.password && registerInfo.nickname) {
      axiosRegister({ ...registerInfo });
      resetRegisterInfo();
      history.replace('/login');
    }
  }, [registerInfo]);
  return (
    <>
      <Register setRegisterInfo={setRegisterInfo} />
    </>
  );
};

export default RegisterPage;
