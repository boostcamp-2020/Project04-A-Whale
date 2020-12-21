import React from 'react';
import Span from '../../atoms/span';
import { getDetails } from '../../../../lib/api';
import {
  SearchResultItemWrapper,
  TitleStyle,
  TitleStyleBold,
  DesignerStyle,
  RefNumStyle,
} from './style';

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
        return <Span style={TitleStyleBold} content={text} />;
      }
      return <Span style={TitleStyle} content={text} />;
    });
  };

  const onClickHandler = async (e) => {
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
