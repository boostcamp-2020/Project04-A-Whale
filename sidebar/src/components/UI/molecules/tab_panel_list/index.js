import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import SaveButton from '../../atoms/save_button';
import TabPanel from '../../atoms/tab_panel';

const useStyles = makeStyles(() => ({
  tabpanel: {
    '&>.MuiBox-root': {
      padding: '0',
    },
  },
}));

const createTabPanelList = ({ tabs, value, onSubmitClick }) => {
  const classes = useStyles();
  return tabs.map((tab, index) => {
    return (
      <TabPanel key={index} value={value} index={index} className={classes.tabpanel}>
        <Paper elevation={3} square>
          <Box p={3}>
            {tab.content}
            <DivAlignRight>
              <SaveButton onSubmitClick={onSubmitClick} />
            </DivAlignRight>
          </Box>
        </Paper>
      </TabPanel>
    );
  });
};

const DivAlignRight = styled.div`
  text-align: right;
  margin-top: 20px;
`;

export default createTabPanelList;
