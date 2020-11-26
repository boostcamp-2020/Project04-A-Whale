import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';

const MenuButton = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => toggleDrawer(true)}
      edge="start"
      className={clsx(classes.menuButton, open && classes.hide)}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
