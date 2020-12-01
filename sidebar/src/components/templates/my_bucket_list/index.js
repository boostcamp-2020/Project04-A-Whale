import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../UI/atoms/text';
import BucketList from '../../UI/organisms/bucket_list';
import AddFabButton from '../../UI/atoms/add_fab_button';
import useStyles from './style';

const MyBucketList = ({ buckets }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <Text
        value={`진행 ${buckets.openBuckets.length}개 | 달성 ${buckets.achieveBuckets.length}개 | 포기 ${buckets.giveUpBuckets.length}개`}
        fontSize="20px"
      />
      <BucketList buckets={buckets} />
      <Link to="/createbucket">
        <AddFabButton />
      </Link>
    </main>
  );
};

export default MyBucketList;
