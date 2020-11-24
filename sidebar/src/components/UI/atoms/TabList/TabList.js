import React from 'react';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function createTabList(tabs) {
  return tabs.map((tab, index) => {
    return <Tab key={index} label={tab.label} {...a11yProps(index)} />;
  });
}
