import React from 'react';
import ReactMarkdown from 'react-markdown';
import LabelContentTab from '../label_content_tab/LabelContentTab';
import WriteTextPicture from '../../molecules/write_text_picture/WriteTextPicture';
import PreviewTextPicture from '../../atoms/preview_text_picture/PreviewTextPicture';

const WritingTab = ({ placeholder, text, onChange }) => {
  const form = <WriteTextPicture placeholder={placeholder} text={text} onChange={onChange} />;
  const markdown = text ? <ReactMarkdown source={text} /> : '아직 작성하지 않았습니다.';
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
