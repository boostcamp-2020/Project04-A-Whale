import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

const AddButton = () => {
  const classes = useStyles();

  return (
    <Fab color="secondary" aria-label="add" className={classes.fab}>
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
