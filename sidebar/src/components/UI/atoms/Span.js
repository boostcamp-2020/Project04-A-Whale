import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const Span = ({ style, content }) => {
  const useStyles = makeStyles({
    root: style,
  });

  const classes = useStyles();
  return (
    <Box className={classes.root} component="span" display="block">
      {content}
    </Box>
  );
};

export default Span;
