import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import useStyles from './style';

const GoBackButton = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return <ArrowBackIcon className={classes.root} onClick={handleClick} />;
};

export default GoBackButton;
