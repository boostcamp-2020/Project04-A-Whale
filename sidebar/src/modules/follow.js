import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const SEARCH_RESULT = 'follow/SEARCH_RESULT';
const RESET_SEARCH_RESULT = 'follow/RESET_SEARCH_RESULT';

export const searchResult = createAction(SEARCH_RESULT, (input) => input);
export const resetSearchResult = createAction(RESET_SEARCH_RESULT);

const initialState = {
  searchResult: null,
};

const follow = handleActions(
  {
    [SEARCH_RESULT]: (state, { payload: input }) => {
      return { searchResult: input };
    },
    [RESET_SEARCH_RESULT]: () => {
      return initialState;
    },
  },
  initialState
);

export default follow;
