import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

const BorderLinearProgress = withStyles(() => ({
  root: {
    width: '100%',
    height: 10,
    borderRadius: 5,
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
    width: '30%',
  },
}));

const AchieveRateWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding || '0px 17px 0px 17px'};
`;

export { useStyles, BorderLinearProgress, AchieveRateWrapper };
