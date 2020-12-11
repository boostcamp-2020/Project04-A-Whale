import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from './style';
import WritingTab from '../../UI/organisms/writing_tab';

const AchieveCreate = ({ bucketState, acheiveState, changeAchieve, submitAchieve }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <div className={classes.page}>
        <div className="bucketInfo">
          <Typography className={classes.title}>
            #{bucketState.no} 〈<span className={classes.bigTitle}>{bucketState.title}</span>〉
            목표를 달성한 소감을 알려주세요.
          </Typography>
          {/* <Divider /> */}
          <Typography>
            from
            <span className={classes.date}>{String(bucketState.createdAt).substring(0, 10)}</span>
            to
            <span className={classes.date}>{String(bucketState.updatedAt).substring(0, 10)}</span>
          </Typography>
          <Typography className={classes.description}>{bucketState.description}</Typography>
        </div>
        <div className="writeImpression">
          <WritingTab
            placeholder="목표 달성 소감을 남겨주세요."
            text={acheiveState.input}
            changeText={changeAchieve}
            submitText={submitAchieve}
          />
        </div>
      </div>
    </div>
  );
};

export default AchieveCreate;
