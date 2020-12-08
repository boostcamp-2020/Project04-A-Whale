import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DetailHeader from '../../UI/organisms/detail_header';
import DetailRegister from '../../UI/organisms/detail_register';
import DetailList from '../../UI/organisms/detail_list';
import MarkdownDiv from '../../UI/atoms/markdown_div';
import useStyles from './style';

const MyBucketListDetail = ({ bucket, details }) => {
  const classes = useStyles();
  const { achieveComment } = bucket;
  const [achieveDisable, setAchieveDisable] = useState(true);

  const handleAchieveButton = (value) => setAchieveDisable(value);

  const isAchieve = () => {
    if (achieveComment) return true;
    return false;
  };

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <DetailHeader bucket={bucket} achieveDisable={achieveDisable} isAchieve={isAchieve()} />
      {isAchieve() ? (
        <>
          <Typography className={classes.text}>달성 소감</Typography>
          <Divider />
          <MarkdownDiv value={achieveComment} />
          <DetailList details={details} isAchieve={isAchieve()} />
        </>
      ) : (
        <>
          <DetailRegister bucket={bucket} />
          <DetailList details={details} handleAchieveButton={handleAchieveButton} />
        </>
      )}
    </main>
  );
};

export default MyBucketListDetail;
