import React from 'react';
import List from '@material-ui/core/List';
import BucketListItem from '../../molecules/bucket_list_item';

const BucketList = ({ bucketList }) => {
  return (
    <List>
      {bucketList.map((bucket) => {
        return <BucketListItem key={bucket.id} bucket={bucket} />;
      })}
    </List>
  );
};

export default BucketList;
