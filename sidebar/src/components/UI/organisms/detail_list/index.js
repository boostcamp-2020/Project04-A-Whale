import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DetailListItem from '../../molecules/detail_list_item';
import { updateDetailStatus } from '../../../../modules/details';
import useStyles from './style';
import { ACHIEVE, OPEN } from '../../../../constants/status';

const DetailList = ({ details, handleAchieveButton, isAchieve }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { openDetails, achieveDetails } = details;
  const [checked, setChecked] = useState([...achieveDetails]);

  const isAllChecked = (checkedList) => {
    return checkedList.length === details.openDetails.length + details.achieveDetails.length;
  };

  useEffect(() => {
    if (isAllChecked(checked)) handleAchieveButton(false);
    else handleAchieveButton(true);
  }, []);

  const statusChange = (detail) => {
    const params = {};
    params.no = detail.no;
    if (detail.status === ACHIEVE) params.status = OPEN;
    if (detail.status === OPEN) params.status = ACHIEVE;
    dispatch(updateDetailStatus(params));
  };

  const handleToggle = (value) => () => {
    if (isAchieve) return;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) newChecked.push(value);
    else newChecked.splice(currentIndex, 1);

    if (isAllChecked(newChecked)) handleAchieveButton(false);
    else handleAchieveButton(true);
    setChecked(newChecked);
    statusChange(value);
  };

  const getDetailListItem = (details) =>
    details.map((detail) => (
      <DetailListItem
        key={detail.no}
        detail={detail}
        handleToggle={handleToggle}
        checked={checked}
        isAchieve={isAchieve}
      />
    ));

  return (
    <>
      {isAchieve ? (
        <>
          <Typography className={classes.text}>상세 목표</Typography>
          <Divider />
          <List className={classes.list}>{getDetailListItem(achieveDetails)}</List>
        </>
      ) : (
        <>
          <Typography className={classes.text}>진행중</Typography>
          <Divider />
          <List className={classes.list}>{getDetailListItem(openDetails)}</List>
          <Typography className={classes.text}>달성</Typography>
          <Divider />
          <List className={classes.list}>{getDetailListItem(achieveDetails)}</List>
        </>
      )}
    </>
  );
};

export default DetailList;
