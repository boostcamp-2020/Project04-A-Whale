import React, { useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import styled from 'styled-components';
import AbandonButton from '../atoms/buttons/AbandonButton';

const BucketListItemWrapper = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

const BucketTitleText = styled.span`
  padding-left: 25px;
  flex: 6;
  font-size: 18px;
`;

const BucketListItem = ({ bucket }) => {
  const [hidden, setHidden] = useState(true);
  const changeHidden = (hidden) => {
    setHidden(!hidden);
  };

  return (
    <BucketListItemWrapper
      onMouseOver={() => changeHidden(true)}
      onMouseLeave={() => changeHidden(false)}
    >
      <ListAltIcon className="list-icon" />
      <BucketTitleText>{bucket}</BucketTitleText>
      {hidden ? null : <AbandonButton />}
    </BucketListItemWrapper>
  );
};

export default BucketListItem;
