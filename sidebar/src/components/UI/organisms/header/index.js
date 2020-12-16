import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GoBackButton from '../../atoms/go_back_button';
import MenuDrawer from '../menu_drawer';
import MenuButton from '../../atoms/menu_button';
import useStyles from './style';
import PopUp from '../popup';
import { getWhaleLocalStorage } from '../../../../lib/whaleLocalStorage';

const Header = ({ title, isGoBack = null }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [dueDetails, setDueDetails] = useState([]);
  const toggleDrawer = (open) => setOpen(open);

  useEffect(() => {
    try {
      whale.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
        if (msg.popup) {
          setPopUpOpen(true);
          const keys = ['dueDetails'];
          const callback = async (items) => {
            setDueDetails(items.dueDetails);
          };
          getWhaleLocalStorage(keys, callback);
          sendResponse({ done: true });
        }
      });
    } catch (error) {
      console.log('웨일 확장앱이 아닙니다. 팝업창을 띄우지 않습니다.');
    }
  }, [popUpOpen]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {isGoBack ? <GoBackButton /> : <MenuButton open={open} toggleDrawer={toggleDrawer} />}
          <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
          <Typography className={classes.text} variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {popUpOpen ? <PopUp dueDetails={dueDetails} /> : null}
    </div>
  );
};

export default Header;
