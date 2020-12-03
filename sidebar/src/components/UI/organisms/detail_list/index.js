import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import DetailListItem from '../../molecules/detail_list_item';
import { updateDetailStatus } from '../../../../modules/details';
import useStyles from './style';

const DetailList = ({ details }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { openDetails, achieveDetails } = details;
  const [checked, setChecked] = useState([...achieveDetails]);

  const statusChange = (detail) => {
    const params = {};
    params.no = detail.no;
    if (detail.status === 'A') params.status = 'O';
    if (detail.status === 'O') params.status = 'A';
    dispatch(updateDetailStatus(params));
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

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
      />
    ));

  return (
    <>
      <Typography className={classes.text}>진행 중인 상세 목표</Typography>
      <Divider />
      <List className={classes.list}>{getDetailListItem(openDetails)}</List>
      <Typography className={classes.text}>달성된 상세 목표</Typography>
      <Divider />
      <List className={classes.list}>{getDetailListItem(achieveDetails)}</List>
    </>
  );
};

export default DetailList;
