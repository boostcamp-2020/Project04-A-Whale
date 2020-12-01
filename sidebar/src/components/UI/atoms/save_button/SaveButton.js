import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  saveButton: {
    margin: theme.spacing(1),
  },
}));

const SaveButton = ({ onSubmitClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.saveButton}
      startIcon={<SaveIcon />}
      onClick={onSubmitClick}
    >
      Save
    </Button>
  );
};

export default SaveButton;
