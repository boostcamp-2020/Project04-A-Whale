import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
