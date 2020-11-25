import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: '#616464',
    borderColor: '#e0e0e0',
  },
}));

const AbandonButton = ({ handleClickOpen }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        size="small"
        onClick={handleClickOpen}
      >
        포기
      </Button>
    </>
  );
};

export default AbandonButton;
