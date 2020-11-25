import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import LabelContentTab from '../label_content_tab/LabelContentTab';
import WriteTextPicture from '../../molecules/write_text_picture/WriteTextPicture';
import PreviewTextPicture from '../../atoms/preview_text_picture/PreviewTextPicture';

const WritingTab = ({ placeholder }) => {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const form = (
    <WriteTextPicture placeholder={placeholder} text={text} onChange={onChangeHandler} />
  );
  const markdown = <ReactMarkdown source={text} />;
  const preview = <PreviewTextPicture text={markdown} />;
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
  return <LabelContentTab tabs={tabs} />;
};

export default WritingTab;
