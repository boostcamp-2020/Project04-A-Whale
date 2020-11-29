import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Text from '../../UI/atoms/text';
import BucketList from '../../UI/organisms/bucket_list';
import AddFabButton from '../../UI/atoms/add_fab_button';
import useStyles from './style';

const MyBucketList = ({ loadingBuckets, buckets }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      {loadingBuckets && <CircularProgress className={classes.spinner} />}
      {!loadingBuckets && buckets && (
        <>
          <Text
            value={`진행 ${buckets.openCount}개 | 달성 ${buckets.achieveCount}개 | 포기 ${buckets.giveUpCount}개`}
            fontSize="20px"
          />
          <BucketList loadingBuckets={loadingBuckets} buckets={buckets} />
        </>
      )}
      <Link to="/createbucket">
        <AddFabButton />
      </Link>
    </main>
  );
};

export default MyBucketList;
