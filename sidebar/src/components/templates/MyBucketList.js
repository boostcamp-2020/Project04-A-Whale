import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Link } from 'react-router-dom';
import AbandonButton from '../UI/atoms/buttons/AbandonButton';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const MyBucketList = ({ bucketList }) => {
  const classes = useStyles();

  return (
    <>
      <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
        <List>
          {bucketList.map((bucket, index) => {
            return (
              <ListItem key={index} role={undefined} dense button>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary={bucket} />
                <ListItemSecondaryAction>
                  <AbandonButton />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Link to="/bucket-list/new">
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </main>
    </>
  );
};

export default MyBucketList;
