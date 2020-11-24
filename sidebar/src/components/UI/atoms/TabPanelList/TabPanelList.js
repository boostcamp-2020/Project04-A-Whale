import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import SaveButton from '../SaveButton/SaveButton';
import TabPanel from '../TabPanel/TabPanel';

const useStyles = makeStyles((theme) => ({
  tabpanel: {
    '&>.MuiBox-root': {
      padding: '0',
    },
  },
}));

export default function createTabPanelList({ tabs, value }) {
  const classes = useStyles();
  return tabs.map((tab, index) => {
    return (
      <TabPanel key={index} value={value} index={index} className={classes.tabpanel}>
        <Paper elevation={3} square>
          <Box p={3}>
            <Typography>{tab.content}</Typography>
            <DivAlignRight>
              <SaveButton />
            </DivAlignRight>
          </Box>
        </Paper>
      </TabPanel>
    );
  });
}

const DivAlignRight = styled.div`
  text-align: right;
  margin-top: 20px;
`;
