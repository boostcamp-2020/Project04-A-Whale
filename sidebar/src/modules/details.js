import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_DETAILS = 'details/GET_DETAILS';
const GET_DETAILS_SUCCESS = 'details/GET_DETAILS_SUCCESS';

const UPDATE_DETAIL_STATUS = 'details/UPDATE_DETAIL_STATUS';
const UPDATE_DETAIL_STATUS_SUCCESS = 'details/UPDATE_DETAIL_STATUS_SUCCESS';

const DELETE_DETAIL = 'details/DELETE_DETAIL';
const DELETE_DETAIL_SUCCESS = 'details/DELETE_DETAIL_SUCCESS';

const CREATE_DETAIL = 'details/CREATE_DETAIL';
const CREATE_DETAIL_SUCCESS = 'details/CREATE_DETAIL_SUCCESS';

export const getDetails = createRequestThunk(GET_DETAILS, api.getDetails);
export const updateDetailStatus = createRequestThunk(UPDATE_DETAIL_STATUS, api.updateDetailStatus);
export const deleteDetail = createRequestThunk(DELETE_DETAIL, api.deleteDetail);
export const createDetail = createRequestThunk(CREATE_DETAIL, api.createDetail);

const initialState = {
  details: {
    openDetails: [],
    achieveDetails: [],
    achieveComment: null,
  },
};

const insertDetail = (array, detail) => {
  const index = array.findIndex(
    (data) =>
      data.dueDate > detail.dueDate || (data.dueDate === detail.dueDate && detail.no < data.no)
  );
  if (index === -1) array.push(detail);
  else array.splice(index, 0, detail);
};

const updateStatusDetail = (addArray, removeArray, idx, status) => {
  removeArray[idx].status = status;
  insertDetail(addArray, removeArray[idx]);
  removeArray.splice(idx, 1);
};

const getUpdateStatusDetails = ({ details }, { no, status }) => {
  const openIdx = details.openDetails.findIndex((detail) => detail.no === no);

  if (openIdx > -1 && status === 'A') {
    updateStatusDetail(details.achieveDetails, details.openDetails, openIdx, status);
    return details;
  }

  const achieveIdx = details.achieveDetails.findIndex((detail) => detail.no === no);

  updateStatusDetail(details.openDetails, details.achieveDetails, achieveIdx, status);
  return details;
};

const getDeleteDetail = ({ details }, { no }) => {
  const openIdx = details.openDetails.findIndex((detail) => detail.no === no);
  const achieveIdx = details.achieveDetails.findIndex((detail) => detail.no === no);

  if (openIdx > -1) details.openDetails.splice(openIdx, 1);
  else details.achieveDetails.splice(achieveIdx, 1);
  return details;
};

const getNewDetails = ({ details }, { detail }) => {
  insertDetail(details.openDetails, detail);
  return details;
};

const details = handleActions(
  {
    [GET_DETAILS_SUCCESS]: (state, action) => ({
      ...state,
      details: action.payload.data,
    }),
    [UPDATE_DETAIL_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: getUpdateStatusDetails(state, action.params),
    }),
    [DELETE_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      buckets: getDeleteDetail(state, action.params),
    }),
    [CREATE_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      buckets: getNewDetails(state, action.payload.data),
    }),
  },
  initialState
);

export default details;
