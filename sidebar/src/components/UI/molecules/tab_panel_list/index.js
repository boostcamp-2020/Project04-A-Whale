import React, { useCallback } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TabPanel from '../../atoms/tab_panel';

const useStyles = makeStyles(() => ({
  tabpanel: {
    '&>.MuiBox-root': {
      padding: '0',
    },
  },
  saveButton: {
    fontSize: 17,
    width: 100,
    color: '#fff',
    padding: '4px 10px',
  },
  paper: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  box: {
    padding: 10,
  },
}));

const createTabPanelList = ({ tabs, tabIndex, text, submitText }) => {
  const classes = useStyles();

  const submitHandler = useCallback(() => {
    submitText(text);
  }, [text]);

  return tabs.map((tab, index) => {
    return (
      <TabPanel key={index} value={tabIndex} index={index} className={classes.tabpanel}>
        <Paper elevation={2} square className={classes.paper}>
          <Box p={3} className={classes.box}>
            {tab.content}
            <DivAlignRight>
              <Button
                className={classes.saveButton}
                onClick={submitHandler}
                variant="contained"
                color="secondary"
                size="large"
              >
                저장
              </Button>
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
