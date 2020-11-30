import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      console.log(response);
      switch (response.status) {
        case 200:
          dispatch({
            type: SUCCESS,
            payload: response.data.data,
          });
          break;
        case 201:
          dispatch({
            type: SUCCESS,
            payload: { success: true, ...response.data },
          });
          break;
        default:
          break;
      }
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
