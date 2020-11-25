import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const AddButton = () => {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="add" className={classes.fab}>
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
