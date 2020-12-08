import React from 'react';
import styled from 'styled-components';
import Span from '../../atoms/span';
import { getDetails } from '../../../../lib/api';

const SearchResultItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleStyle = {
  fontSize: '16px',
  display: 'inline-block',
};

const TitleStyleBold = {
  fontWeight: 'bolder',
  fontSize: '18px',
  display: 'inline-block',
};

const DesignerStyle = {
  fontSize: '12px',
  marginLeft: '12px',
  textAlign: 'center',
  verticalAlign: 'center',
};

const RefNumStyle = {
  fontSize: '10px',
  paddingLeft: '10px',
  textAlign: 'center',
  verticalAlign: 'center',
};

const SearchResultItem = ({ bucket, boldWord, selectFunc }) => {
  const { no, title, description, refCount, nickname } = bucket;

  const partialBoldText = (text, boldWord) => {
    const left = text.indexOf(boldWord[0]);
    const right = left + boldWord.length - 1;
    const pre = left === 0 ? '' : text.substr(0, left);
    const mid = boldWord;
    const next = right === text.length - 1 ? '' : text.substr(right + 1);
    return [pre, mid, next].map((text, i) => {
      if (i === 1) {
        console.log(text, i);
        return <Span style={TitleStyleBold} content={text} />;
      }
      return <Span style={TitleStyle} content={text} />;
    });
  };

  const onClickHandler = async () => {
    const { data } = await getDetails(no);
    const { openDetails, achieveDetails } = data.data.details;
    const details = openDetails.concat(achieveDetails);
    selectFunc({ title, description, details });
  };

  return (
    <SearchResultItemWrapper onClick={onClickHandler}>
      {partialBoldText(title, boldWord)}
      <Span name="bucketDesigner" style={DesignerStyle} content={`@${nickname}`} />
      <Span name="bucketRefNum" style={RefNumStyle} content={`(${refCount}건)`} />
    </SearchResultItemWrapper>
  );
};

export default SearchResultItem;
