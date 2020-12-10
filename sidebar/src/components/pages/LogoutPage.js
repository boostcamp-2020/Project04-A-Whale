import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const authState = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (authState.isAuth) {
      localStorage.removeItem('accessToken');
      history.replace('/login');
    }
  }, []);

  return <div />;
};

export default LogoutPage;
