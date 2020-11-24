import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TextTab from '../../molecules/LabelContentTab/LabelContentTab';
import WriteTextWithPicture from '../../atoms/WriteTextPicture/WriteTextPicture';

const WriteTextArea = ({ placeholder }) => {
  const [text, setText] = useState('');

  const form = <WriteTextWithPicture placeholder={placeholder} text={text} />;
  const preview = <ReactMarkdown source={text} />;
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
  return <TextTab tabs={tabs} />;
};

export default WriteTextArea;
