import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../templates/login';
import { userLogin } from '../../lib/api';

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  const resetLoginInfo = () => {
    setLoginInfo({ id: '', password: '' });
  };
  const history = useHistory();
  const axiosLogin = useCallback(async (body) => {
    const result = await userLogin(body);
    localStorage.setItem('accessToken', result.data.accessToken);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      history.replace('/');
    }
  }, []);

  useEffect(() => {
    if (loginInfo.id && loginInfo.password) {
      axiosLogin({ ...loginInfo });
      resetLoginInfo();
      history.replace('/');
    }
  }, [loginInfo]);
  return (
    <>
      <Login setLoginInfo={setLoginInfo} />
    </>
  );
};

export default LoginPage;
