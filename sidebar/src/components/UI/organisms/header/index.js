import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GoBackButton from '../../atoms/go_back_button';
import MenuDrawer from '../menu_drawer';
import MenuButton from '../../atoms/menu_button';
import useStyles from './style';

const Header = ({ title, isGoBack = null }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => setOpen(open);

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
    </div>
  );
};

export default Header;
