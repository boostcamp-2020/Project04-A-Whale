import React from 'react';
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import useStyles from './style';

const RefreshButton = ({ handleRefresh }) => {
  const classes = useStyles();

  return (
    <Fab color="secondary" aria-label="refresh" className={classes.fab} onClick={handleRefresh}>
      <RefreshIcon />
    </Fab>
  );
};

export default RefreshButton;
