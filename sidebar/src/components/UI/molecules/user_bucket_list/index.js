import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import UserBucketListItem from '../user_bucket_list_item';

const UserBucketList = ({ buckets, value }) => {
  const classes = useStyles();
  const { openBuckets, achieveBuckets } = buckets;

  const getBucketListItem = (buckets) => {
    return buckets.map((bucket) => <UserBucketListItem key={bucket.no} bucket={bucket} />);
  };

  const getBucketList = (buckets, text = null) => {
    return (
      <>
        {text ? (
          <>
            <Typography className={classes.text}>{text}</Typography>
            <Divider />
          </>
        ) : null}
        <List>{getBucketListItem(buckets)}</List>
      </>
    );
  };

  return (
    <>
      {value === 0 ? (
        <>
          {getBucketList(openBuckets, '진행중')}
          {getBucketList(achieveBuckets, '달성')}
        </>
      ) : null}
      {value === 1 ? getBucketList(openBuckets) : null}
      {value === 2 ? getBucketList(achieveBuckets) : null}
    </>
  );
};

export default UserBucketList;
