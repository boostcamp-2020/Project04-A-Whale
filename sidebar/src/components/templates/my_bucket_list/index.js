import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BucketList from '../../UI/organisms/bucket_list';
import AddFabButton from '../../UI/atoms/add_fab_button';
import useStyles from './style';

const TabPanel = ({ buckets, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <BucketList buckets={buckets} value={value} />}
    </div>
  );
};

const MyBucketList = ({ buckets }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const openCount = buckets.openBuckets.length;
  const achieveCount = buckets.achieveBuckets.length;
  const giveUpCount = buckets.giveUpBuckets.length;
  const total = openCount + achieveCount + giveUpCount;
  const tabItems = [
    `전체(${total})`,
    `진행중(${openCount})`,
    `달성(${achieveCount})`,
    `포기(${giveUpCount})`,
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getIdAndAriaControls = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabItems.map((v, i) => (
            <Tab key={i} label={v} {...getIdAndAriaControls(i)} />
          ))}
        </Tabs>
      </AppBar>
      <div>
        {tabItems.map((v, i) => (
          <TabPanel key={i} value={value} index={i} buckets={buckets} />
        ))}
      </div>
      <Link to="/createbucket">
        <AddFabButton />
      </Link>
    </div>
  );
};

export default MyBucketList;
