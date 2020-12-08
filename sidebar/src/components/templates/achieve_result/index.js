import React from 'react';
import useStyles from './style';
import LineBarAreaComposedChart from '../../UI/organisms/line_bar_area_composed_chart';

const AchieveResult = ({ bucket, description, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <div className={classes.page}>
        <div className="bucketInfo">
          <div>〈목표 달성!〉</div>
          <h1>#01 {bucket}</h1>
          <p>{description}</p>
          <p>from {date}</p>
        </div>
        <div>
          <LineBarAreaComposedChart />
        </div>
      </div>
    </div>
  );
};

export default AchieveResult;
