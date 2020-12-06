import React from 'react';
import ReactMarkdown from 'react-markdown';
import useStyles from './style';

const MarkdownDiv = ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactMarkdown source={value} />
    </div>
  );
};

export default MarkdownDiv;
