import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (...params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      console.log(type, params);
      const response = await request(...params);
      dispatch({
        type: SUCCESS,
        params,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}
