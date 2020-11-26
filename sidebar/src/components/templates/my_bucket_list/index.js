import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../UI/atoms/text';
import BucketList from '../../UI/organisms/bucket_list';
import AddFabButton from '../../UI/atoms/add_fab_button';
import useStyles from './style';

const MyBucketList = ({ bucketList }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <Text value="진행 N개 / 달성 M개" fontSize="20px" />
      <BucketList bucketList={bucketList} />
      <Link to="/createbucket">
        <AddFabButton />
      </Link>
    </main>
  );
};

export default MyBucketList;
