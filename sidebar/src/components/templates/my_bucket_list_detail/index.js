import React from 'react';
import DetailHeader from '../../UI/organisms/detail_header';
import DetailRegister from '../../UI/organisms/detail_register';
import DetailList from '../../UI/organisms/detail_list';
import ReadOnlyInput from '../../UI/atoms/read_only_input';
import useStyles from './style';

const MyBucketListDetail = ({ bucket, details }) => {
  const classes = useStyles();
  const { achieveComment } = details;

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <DetailHeader bucket={bucket} />
      {achieveComment ? (
        <ReadOnlyInput label="달성 소감🎉" value={achieveComment} />
      ) : (
        <DetailRegister bucket={bucket} />
      )}
      <DetailList details={details} />
    </main>
  );
};

export default MyBucketListDetail;
