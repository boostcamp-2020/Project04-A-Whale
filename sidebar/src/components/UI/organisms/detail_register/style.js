import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  datailInput: {
    marginRight: '20px',
  },
}));

const NewTodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { useStyles, NewTodoWrapper };
