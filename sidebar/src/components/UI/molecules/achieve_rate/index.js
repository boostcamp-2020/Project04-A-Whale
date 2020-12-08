import React from 'react';
import { useStyles, BorderLinearProgress, AchieveRateWrapper } from './style';

const AcieveRate = ({ achieveRate }) => {
  const classes = useStyles();

  return (
    <AchieveRateWrapper>
      <span className={classes.achieveRateText}>목표 달성률</span>
      <BorderLinearProgress variant="determinate" value={achieveRate} />
    </AchieveRateWrapper>
  );
};
export default AcieveRate;
