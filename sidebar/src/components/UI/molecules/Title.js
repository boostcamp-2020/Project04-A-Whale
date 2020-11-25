import React from 'react';
import Span from '../atoms/Span';

const Title = (TitleStyle, content) => {
  return <Span style={TitleStyle} content={content} />;
};

export default Title;
