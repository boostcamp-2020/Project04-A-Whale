import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import useStyles from './style';

const AbandonButton = ({ handleOpen }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        size="small"
        onClick={handleOpen}
      >
        포기
      </Button>
    </>
  );
};

export default AbandonButton;
