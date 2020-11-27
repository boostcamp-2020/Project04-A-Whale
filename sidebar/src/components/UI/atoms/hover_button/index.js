import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import HistoryIcon from '@material-ui/icons/History';
import Button from '@material-ui/core/Button';
import useStyles from './style';

const AbandonButton = ({ handleOpen, text }) => {
  const classes = useStyles();

  const getIcon = () => {
    if (text === '포기') return <DeleteIcon />;
    if (text === '되돌리기') return <HistoryIcon />;
    return null;
  };

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={getIcon()}
        size="small"
        onClick={handleOpen}
      >
        {text}
      </Button>
    </>
  );
};

export default AbandonButton;
