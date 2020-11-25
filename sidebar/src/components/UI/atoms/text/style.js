import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
}));

const TextWrapper = styled.div`
  font-size: ${(props) => props.fontSize};
`;

export { useStyles, TextWrapper };
