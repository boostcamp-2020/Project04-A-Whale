import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './style';

const ReadOnlyInput = ({ label, value }) => {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-read-only-input"
      label={label}
      defaultValue={value}
      className={classes.root}
      InputProps={{
        readOnly: true,
      }}
      InputLabelProps={{
        classes: {
          root: classes.labelRoot,
        },
      }}
      variant="outlined"
      fullWidth
      margin="normal"
      multiline
    />
  );
};

export default ReadOnlyInput;
