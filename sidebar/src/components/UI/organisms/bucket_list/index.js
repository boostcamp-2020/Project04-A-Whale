import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import BucketListItem from '../../molecules/bucket_list_item';
import useStyles from './style';

const BucketList = ({ bucketList }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>진행 중인 목표</Typography>
      <Divider />
      <List>
        {bucketList.map((bucket) => {
          if (bucket.status === 'O') return <BucketListItem key={bucket.id} bucket={bucket} />;
          return null;
        })}
      </List>
      <Typography className={classes.text}>달성된 목표</Typography>
      <Divider />
      <List>
        {bucketList.map((bucket) => {
          if (bucket.status === 'A') return <BucketListItem key={bucket.id} bucket={bucket} />;
          return null;
        })}
      </List>
      <Typography className={classes.text}>포기한 목표</Typography>
      <Divider />
      <List>
        {bucketList.map((bucket) => {
          if (bucket.status === 'G') return <BucketListItem key={bucket.id} bucket={bucket} />;
          return null;
        })}
      </List>
    </>
  );
};

export default BucketList;
