import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  datePicker: {
    marginLeft: '10px',
  },
}));

const NewTodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { useStyles, NewTodoWrapper };
