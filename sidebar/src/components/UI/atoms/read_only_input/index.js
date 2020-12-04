import React from 'react';
import ReactMarkdown from 'react-markdown';
import useStyles from './style';

const ReadOnlyInput = ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactMarkdown source={value} />
    </div>
  );
};

export default ReadOnlyInput;
