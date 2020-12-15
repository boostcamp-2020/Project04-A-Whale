import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';
import { ACHIEVE } from '../constants/status';

const GET_DETAILS = 'details/GET_DETAILS';
const GET_DETAILS_SUCCESS = 'details/GET_DETAILS_SUCCESS';

const UPDATE_DETAIL_STATUS = 'details/UPDATE_DETAIL_STATUS';
const UPDATE_DETAIL_STATUS_SUCCESS = 'details/UPDATE_DETAIL_STATUS_SUCCESS';

const DELETE_DETAIL = 'details/DELETE_DETAIL';
const DELETE_DETAIL_SUCCESS = 'details/DELETE_DETAIL_SUCCESS';

const CREATE_DETAIL = 'details/CREATE_DETAIL';
const CREATE_DETAIL_SUCCESS = 'details/CREATE_DETAIL_SUCCESS';

const UPDATE_DETAIL_INFO = 'details/UPDATE_DETAIL_INFO';

export const getDetails = createRequestThunk(GET_DETAILS, api.getDetails);
export const updateDetailStatus = createRequestThunk(UPDATE_DETAIL_STATUS, api.updateDetailStatus);
export const updateDetailInfo = createRequestThunk(UPDATE_DETAIL_INFO, api.updateDetailInfo);
export const deleteDetail = createRequestThunk(DELETE_DETAIL, api.deleteDetail);
export const createDetail = createRequestThunk(CREATE_DETAIL, api.createDetail);

const initialState = {
  bucket: {},
  details: {
    openDetails: [],
    achieveDetails: [],
  },
  burnDownChart: [],
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

  if (openIdx > -1 && status === ACHIEVE) {
    updateStatusDetail(details.achieveDetails, details.openDetails, openIdx, status);
    return details;
  }

  const achieveIdx = details.achieveDetails.findIndex((detail) => detail.no === no);

  updateStatusDetail(details.openDetails, details.achieveDetails, achieveIdx, status);
  return details;
};

const formattingBurndownChart = (details) => {
  if (!details.length) return [];
  const dates = details.map(({ dueDate }) => dueDate);
  let prevDate = null;
  if (details.length === 1) prevDate = details[0].createdAt;
  else {
    prevDate = details.reduce((prev, { createdAt }) => (prev > createdAt ? createdAt : prev));
  }
  if (prevDate) {
    dates.push(prevDate.split(' ')[0]);
  }
  const uniqueDate = [...new Set(dates)].sort();

  const result = uniqueDate.map((date, index) => {
    const burndownChart = {
      name: date,
      Ideal_burndown: ((uniqueDate.length - 1 - index) / (uniqueDate.length - 1)) * details.length,
      Completed_tasks: details.filter(
        ({ status, updatedAt }) => status === 'A' && prevDate < updatedAt && updatedAt <= date
      ).length,
      Remaining_tasks:
        details.filter(({ status }) => status === 'O').length +
        details.filter(({ status, updatedAt }) => status === 'A' && updatedAt > date).length,
    };
    prevDate = date;
    return burndownChart;
  });
  return result;
};

const getUpdateBurndownChart = (state) => {
  let details = [];
  details = details.concat(state.details.openDetails);
  details = details.concat(state.details.achieveDetails);
  details.sort((a, b) => a.dueDate - b.dueDate);
  return formattingBurndownChart(details);
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
      bucket: action.payload.data.bucket,
      details: action.payload.data.details,
      burnDownChart: action.payload.data.burnDownChart,
    }),
    [UPDATE_DETAIL_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      details: getUpdateStatusDetails(state, action.params),
      burnDownChart: getUpdateBurndownChart(state),
    }),
    [DELETE_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      details: getDeleteDetail(state, action.params),
      burnDownChart: getUpdateBurndownChart(state),
    }),
    [CREATE_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      details: getNewDetails(state, action.payload.data),
      burnDownChart: getUpdateBurndownChart(state),
    }),
  },
  initialState
);

export default details;
