import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Text from '../../UI/atoms/text/Text';
import BucketList from '../../UI/organisms/bucket_list/BucketList';
import AddFabButton from '../../UI/atoms/add_fab_button/AddFabButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#555555',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const MyBucketList = ({ bucketList }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.drawerHeader} />
      <Text value="진행 N개 / 달성 M개" fontSize="20px" />
      <BucketList bucketList={bucketList} />
      <Link to="/bucket-list/new">
        <AddFabButton />
      </Link>
    </main>
  );
};

export default MyBucketList;
