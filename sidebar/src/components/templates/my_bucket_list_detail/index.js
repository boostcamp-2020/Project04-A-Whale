import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DetailHeader from '../../UI/organisms/detail_header';
import DetailRegister from '../../UI/organisms/detail_register';
import DetailList from '../../UI/organisms/detail_list';
import MarkdownDiv from '../../UI/atoms/markdown_div';
import LineBarAreaComposedChart from '../../UI/organisms/line_bar_area_composed_chart';
import PieChart from '../../UI/organisms/pie_chart';
import useStyles from './style';

const MyBucketListDetail = ({ bucket, details, burnDownChart }) => {
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
          <div className={classes.achieve}>
            <MarkdownDiv value={achieveComment} />
          </div>
          <Typography className={classes.text}>한눈에 보기</Typography>
          <Divider />
          <LineBarAreaComposedChart burnDownChart={burnDownChart} />
          <PieChart details={details} />
          <DetailList details={details} isAchieve={isAchieve} />
        </>
      ) : (
        <>
          <DetailRegister bucket={bucket} />
          <DetailList details={details} handleAchieveButton={handleAchieveButton} />
          <Typography className={classes.text}>한눈에 보기</Typography>
          <Divider />
          <LineBarAreaComposedChart burnDownChart={burnDownChart} />
          <PieChart details={details} />
        </>
      )}
    </main>
  );
};

export default MyBucketListDetail;
