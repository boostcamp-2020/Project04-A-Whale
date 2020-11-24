import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: '#333333',
    borderColor: '#E0E0E0',
  },
}));

const AbandonButton = () => {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        size="small"
      >
        포기
      </Button>
    </>
  );
};

export default AbandonButton;
