import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import BucketListItem from '../../molecules/bucket_list_item';
import useStyles from './style';

const BucketList = ({ buckets, value }) => {
  const classes = useStyles();
  const { openBuckets, achieveBuckets, giveUpBuckets } = buckets;

  const getBucketListItem = (buckets) =>
    buckets.map((bucket) => <BucketListItem key={bucket.no} bucket={bucket} />);

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
          {getBucketList(giveUpBuckets, '포기')}
        </>
      ) : null}
      {value === 1 ? getBucketList(openBuckets) : null}
      {value === 2 ? getBucketList(achieveBuckets) : null}
      {value === 3 ? getBucketList(giveUpBuckets) : null}
    </>
  );
};

export default BucketList;
