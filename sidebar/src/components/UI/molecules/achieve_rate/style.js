import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

const BorderLinearProgress = withStyles(() => ({
  root: {
    width: 255,
    height: 10,
    borderRadius: 5,
    marginLeft: 17,
  },
  colorPrimary: {
    backgroundColor: '#d8e9ef',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#4ea1d3',
  },
}))(LinearProgress);

const useStyles = makeStyles(() => ({
  achieveRateText: {
    fontSize: 20,
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
