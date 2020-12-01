import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import BucketListItem from '../../molecules/bucket_list_item';
import useStyles from './style';

const BucketList = ({ buckets }) => {
  const classes = useStyles();
  const { openBuckets, achieveBuckets, giveUpBuckets } = buckets;

  return (
    <>
      <Typography className={classes.text}>진행 중인 목표</Typography>
      <Divider />
      <List>
        {openBuckets.map((bucket) => (
          <BucketListItem key={bucket.no} bucket={bucket} />
        ))}
      </List>
      <Typography className={classes.text}>달성된 목표</Typography>
      <Divider />
      <List>
        {achieveBuckets.map((bucket) => (
          <BucketListItem key={bucket.no} bucket={bucket} />
        ))}
      </List>
      <Typography className={classes.text}>포기한 목표</Typography>
      <Divider />
      <List>
        {giveUpBuckets.map((bucket) => (
          <BucketListItem key={bucket.no} bucket={bucket} />
        ))}
      </List>
    </>
  );
};

export default BucketList;
