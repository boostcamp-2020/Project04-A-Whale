import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import createTabList from '../../molecules/tab_list';
import createTabPanelList from '../../molecules/tab_panel_list';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    fontSize: 20,
    width: 120,
  },
  appBar: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
}));

const LabelContentTab = ({ tabs, text, submitText }) => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  let tabList = null;
  let tabPanelList = null;
  if (tabs) {
    tabList = createTabList(tabs, classes);
    tabPanelList = createTabPanelList({ tabs, tabIndex, text, submitText });
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs
          value={tabIndex}
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
