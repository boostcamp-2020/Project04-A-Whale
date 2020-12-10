import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const SEARCH_RESULT = 'follow/SEARCH_RESULT';

export const searchResult = createAction(SEARCH_RESULT, (input) => input);

const initialState = {
  value: 0,
  searchResult: [],
};

const follow = handleActions(
  {
    [SEARCH_RESULT]: (state, { payload: input }) => {
      return { search: input };
    },
  },
  initialState
);

export default follow;
