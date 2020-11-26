import React from 'react';

import useStyles from './style';

import WritingTab from '../../UI/organisms/writing_tab';

const AchieveCreate = ({ bucketState, acheiveState, acheiveChangeHandler }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <div className={classes.page}>
        <div className="bucketInfo">
          <div>〈목표 달성!〉</div>
          <h1>#01 {bucketState.bucket}</h1>
          <p>{bucketState.description}</p>
          <p>from {bucketState.date}</p>
        </div>
        <div className="writeImpression">
          <WritingTab
            placeholder="목표 달성 소감을 남겨주세요."
            text={acheiveState.input}
            onChange={acheiveChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AchieveCreate;
