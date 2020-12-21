import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import LabelContentTab from '../label_content_tab';
import WriteTextPicture from '../../molecules/write_text_picture';
import PreviewTextPicture from '../../atoms/preview_text_picture';
import useStyles from './style';

const WritingTab = ({ placeholder, text, changeText, submitText, update }) => {
  const classes = useStyles();
  const [writeTabText, setWriteTabText] = useState('');
  const form = (
    <WriteTextPicture placeholder={placeholder} text={writeTabText} changeText={setWriteTabText} />
  );
  const markdown = writeTabText ? (
    <ReactMarkdown source={writeTabText} />
  ) : (
    <span className={classes.noContent}>미리보기할 내용이 없습니다</span>
  );
  const preview = <PreviewTextPicture className={classes.preview} text={markdown} />;
  const tabs = [
    {
      label: '작성',
      content: form,
    },
    {
      label: '미리보기',
      content: preview,
    },
  ];

  useEffect(() => {
    if (update) {
      setWriteTabText(text);
    }
  }, []);

  useEffect(() => {
    changeText(writeTabText);
  }, [writeTabText]);

  return <LabelContentTab tabs={tabs} text={text} submitText={submitText} />;
};

export default WritingTab;
