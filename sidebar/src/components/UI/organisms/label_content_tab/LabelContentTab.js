import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import createTabList from '../../molecules/tab_list/TabList';
import createTabPanelList from '../../molecules/tab_panel_list/TabPanelList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const LabelContentTab = ({ tabs }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let tabList = null;
  let tabPanelList = null;
  if (tabs) {
    tabList = createTabList(tabs);
    tabPanelList = createTabPanelList({ tabs, value });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabList}
        </Tabs>
      </AppBar>
      {tabPanelList}
    </div>
  );
};

export default LabelContentTab;
