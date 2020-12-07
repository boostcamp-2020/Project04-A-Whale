import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    width: 255,
    height: 10,
    borderRadius: 5,
    marginLeft: 17,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#3f51b5',
  },
}))(LinearProgress);

const useStyles = makeStyles(() => ({
  achieveRateText: {
    '&:hover': {
      cursor: 'default',
    },
  },
}));

const AchieveRateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17px;
`;

export { useStyles, BorderLinearProgress, AchieveRateWrapper };
