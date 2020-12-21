import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './style';
import UserBucketList from '../../molecules/user_bucket_list';

const TabPanel = ({ buckets, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <UserBucketList buckets={buckets} value={value} />}
    </div>
  );
};

const UserBuckets = ({ buckets }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const openCount = buckets.openBuckets.length;
  const achieveCount = buckets.achieveBuckets.length;
  const total = openCount + achieveCount;
  const tabItems = [`전체(${total})`, `진행중(${openCount})`, `달성(${achieveCount})`];

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
      <AppBar position="static" color="default" className={classes.appBar}>
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
    </div>
  );
};

export default UserBuckets;
