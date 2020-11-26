import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';

const useStyles = makeStyles((theme) => ({
  gobackButton: {
    margin: theme.spacing(1),
  },
}));

const GobackButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      className={classes.gobackButton}
      startIcon={<ReplyIcon />}
      onClick={onClick}
    >
      뒤로가기
    </Button>
  );
};

export default GobackButton;
