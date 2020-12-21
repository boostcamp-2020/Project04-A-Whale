import React, { useCallback } from 'react';

import Button from '@material-ui/core/Button';
import useStyles from './style';

const RegisterForm = ({ buttonName }) => {
  const classes = useStyles();

  return (
    <Button className={classes.outlineButton} variant="outlined" color="secondary" type="submit">
      {buttonName}
    </Button>
  );
};

export default RegisterForm;
