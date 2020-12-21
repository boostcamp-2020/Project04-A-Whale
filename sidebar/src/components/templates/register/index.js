import React from 'react';
import TitleLogo from '../../UI/molecules/title_logo';
import RegisterForm from '../../UI/organisms/register_form';
import useStyles from './style';

const Register = ({ setRegisterInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitleLogo />
      <RegisterForm setRegisterInfo={setRegisterInfo} />
    </div>
  );
};

export default Register;
