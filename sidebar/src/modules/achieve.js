import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'achieve/CHANGE_INPUT'; // 인풋 값을 변경함

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

const initialState = {
  input: '',
};

const achieveReducer = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
  },
  initialState
);

export default achieveReducer;
