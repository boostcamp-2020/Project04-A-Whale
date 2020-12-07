import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Register from '../templates/register';

const RegisterPage = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      history.replace('/');
    }
  }, []);
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
