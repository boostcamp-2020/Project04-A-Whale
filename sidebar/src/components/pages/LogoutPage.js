import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import isLogin from '../../lib/isLogin';
import { removeAllAlarms } from '../../lib/alarm';

const LogoutPage = () => {
  const history = useHistory();
  useEffect(() => {
    removeAllAlarms();
    if (isLogin()) {
      localStorage.removeItem('accessToken');
      history.replace('/login');
    }
  }, []);

  return <div />;
};

export default LogoutPage;
