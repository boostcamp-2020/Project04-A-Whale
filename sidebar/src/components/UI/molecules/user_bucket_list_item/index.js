import React from 'react';
import { BucketListItemWrapper, BucketTitleTextWrapper } from './style';
import Text from '../../atoms/text';
import { OPEN, GIVEUP } from '../../../../constants/status';

const UserBucketListItem = ({ bucket }) => {
  const getIcon = () => {
    if (bucket.status === GIVEUP) return <div className="list-icon">🔒</div>;
    if (bucket.status === OPEN) return <div className="list-icon">⏳</div>;
    return <div className="list-icon">🎉</div>;
  };

  return (
    <BucketListItemWrapper>
      {getIcon()}
      <BucketTitleTextWrapper>
        <Text value={bucket.title} fontSize="16px" />
      </BucketTitleTextWrapper>
    </BucketListItemWrapper>
  );
};

export default UserBucketListItem;
