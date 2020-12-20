import React from 'react';
import TitleLogo from '../../UI/molecules/title_logo';
import LoginForm from '../../UI/organisms/login_form';

import useStyles from './style';

const Login = ({ setLoginInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitleLogo />
      <LoginForm setLoginInfo={setLoginInfo} />
    </div>
  );
};

export default Login;
