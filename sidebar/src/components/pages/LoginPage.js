import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from '../templates/login';
import { userLogin } from '../../lib/api';
import { getBuckets } from '../../modules/buckets';
import { getUser } from '../../modules/user';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  const resetLoginInfo = () => {
    setLoginInfo({ id: '', password: '' });
  };
  const history = useHistory();
  const axiosLogin = useCallback(async (body) => {
    const result = await userLogin(body);
    localStorage.setItem('accessToken', result.data.accessToken);
    resetLoginInfo();
    dispatch(getBuckets());
    dispatch(getUser());
    history.replace('/');
  }, []);

  useEffect(() => {
    chrome.storage.local.clear();
    if (loginInfo.id && loginInfo.password) {
      axiosLogin({ ...loginInfo });
    }
  }, [loginInfo]);
  return (
    <>
      <Login setLoginInfo={setLoginInfo} />
    </>
  );
};

export default LoginPage;
