import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DetailHeader from '../../UI/organisms/detail_header';
import DetailRegister from '../../UI/organisms/detail_register';
import DetailList from '../../UI/organisms/detail_list';
import MarkdownDiv from '../../UI/atoms/markdown_div';
import WritingTab from '../../UI/organisms/writing_tab';
import LineBarAreaComposedChart from '../../UI/organisms/line_bar_area_composed_chart';
import PieChart from '../../UI/organisms/pie_chart';
import { updateAchieve } from '../../../modules/achieve';
import ModifyButton from '../../UI/atoms/modify_button';
import { useStyles, AchieveWrapper } from './style';

const MyBucketListDetail = ({ bucket, details, burnDownChart }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [achieveComment, setAchieveComment] = useState(bucket.achieveComment);
  const [prevAchieveComment, setPrevAchieveComment] = useState(bucket.achieveComment);
  const [open, setOpen] = useState(false);
  const [achieveDisable, setAchieveDisable] = useState(true);

  const handleAchieveButton = (value) => setAchieveDisable(value);

  const isAchieve = () => {
    if (achieveComment === null) return false;
    return true;
  };

  const handleOpen = () => {
    setOpen(true);
    setPrevAchieveComment(achieveComment);
  };

  const handleClose = () => {
    setOpen(false);
    setAchieveComment(prevAchieveComment);
  };

  const changeAchieve = (text) => setAchieveComment(text);

  const modifyAchieve = (text) => {
    dispatch(updateAchieve({ achieveNo: bucket.achieveNo, description: text }));
    setOpen(false);
  };

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <DetailHeader bucket={bucket} achieveDisable={achieveDisable} isAchieve={isAchieve()} />
      {isAchieve() ? (
        <>
          <AchieveWrapper>
            <Typography className={classes.achieveCommentTitle}>💡 달성 소감</Typography>
            <ModifyButton width="25px" onClick={handleOpen} />
          </AchieveWrapper>
          <Divider />
          <Dialog
            onClose={handleClose}
            aria-labelledby="achieve"
            open={open}
            maxWidth="lg"
            fullWidth
          >
            <WritingTab
              placeholder="목표 달성 소감을 남겨주세요."
              text={achieveComment}
              changeText={changeAchieve}
              submitText={modifyAchieve}
            />
          </Dialog>
          <div className={classes.achieve}>
            <MarkdownDiv value={achieveComment} />
          </div>
          <Typography className={classes.text}>📊 한눈에 보기</Typography>
          <Divider />
          <LineBarAreaComposedChart burnDownChart={burnDownChart} />
          <PieChart details={details} />
          <DetailList
            details={details}
            isAchieve={isAchieve}
            handleAchieveButton={handleAchieveButton}
          />
        </>
      ) : (
        <>
          <DetailRegister bucket={bucket} />
          <DetailList details={details} handleAchieveButton={handleAchieveButton} />
          <Typography className={classes.text}>📊 한눈에 보기</Typography>
          <Divider />
          <LineBarAreaComposedChart burnDownChart={burnDownChart} />
          <PieChart details={details} />
        </>
      )}
    </main>
  );
};

export default MyBucketListDetail;
