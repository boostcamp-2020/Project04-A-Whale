import React from 'react';
import ReactMarkdown from 'react-markdown';
import useStyles from './style';

const MarkdownDiv = ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {value === '' ? <span>달성소감이 없습니다.</span> : <ReactMarkdown source={value} />}
    </div>
  );
};

export default MarkdownDiv;
