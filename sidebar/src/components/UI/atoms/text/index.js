import React from 'react';
import { useStyles, TextWrapper } from './style';

const text = ({ value, fontSize }) => {
  const classes = useStyles();

  return (
    <TextWrapper className={classes.root} fontSize={fontSize}>
      {value}
    </TextWrapper>
  );
};

export default text;
