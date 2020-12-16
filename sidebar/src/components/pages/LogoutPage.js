import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import isLogin from '../../lib/isLogin';
import { removeAllAlarms } from '../../lib/alarm';

const LogoutPage = () => {
  const history = useHistory();
  useEffect(() => {
    try {
      removeAllAlarms();
    } catch (error) {
      console.log('웨일 확장앱이 아닙니다. 알람 삭제 기능을 수행하지 않습니다.');
    }

    if (isLogin()) {
      localStorage.removeItem('accessToken');
      history.replace('/login');
    }
  }, []);

  return <div />;
};

export default LogoutPage;
