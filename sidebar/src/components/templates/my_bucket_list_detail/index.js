import React, { useState } from 'react';
import DetailHeader from '../../UI/organisms/detail_header';
import DetailRegister from '../../UI/organisms/detail_register';
import DetailList from '../../UI/organisms/detail_list';
import MarkdownDiv from '../../UI/atoms/markdown_div';
import useStyles from './style';

const MyBucketListDetail = ({ bucket, details }) => {
  const classes = useStyles();
  const { achieveComment } = details;
  const [achieveDisable, setAchieveDisable] = useState(true);

  const handleAchieveButton = (value) => setAchieveDisable(value);

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <DetailHeader bucket={bucket} achieveDisable={achieveDisable} />
      {achieveComment ? (
        <MarkdownDiv label="달성 소감🎉" value={achieveComment} />
      ) : (
        <DetailRegister bucket={bucket} />
      )}
      <DetailList details={details} handleAchieveButton={handleAchieveButton} />
    </main>
  );
};

export default MyBucketListDetail;
