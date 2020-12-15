import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { updateBucketStatus } from '../../modules/buckets';
import { reset, changeInput, setAchieve } from '../../modules/achieve';
import AchieveCreateLayout from '../templates/achieve_create';
import Header from '../UI/organisms/header';
import { ACHIEVE } from '../../constants/status';

const AchieveCreatePage = ({ match }) => {
  const location = useLocation();
  const [bucketState, setBucket] = useState({});
  const { bucketNo } = match.params;
  const acheiveState = useSelector((state) => state.acheive);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeAchieve = useCallback((text) => {
    dispatch(changeInput(text));
  }, []);

  const submitAchieve = useCallback((text) => {
    dispatch(updateBucketStatus({ no: bucketNo, status: ACHIEVE }));
    dispatch(setAchieve({ description: text, bucketNo }));
  }, []);

  useEffect(() => {
    if (acheiveState.success) {
      dispatch(reset());
      history.replace(`/detail/${bucketNo}`);
    }
  }, [acheiveState]);

  useEffect(() => {
    if (!location.state) {
      history.goBack();
      return;
    }
    const { bucket } = location.state;
    setBucket(bucket);
  }, []);

  return (
    <>
      <Header title="목표 달성 소감" isGoBack />
      <AchieveCreateLayout
        bucketState={bucketState}
        acheiveState={acheiveState}
        changeAchieve={changeAchieve}
        submitAchieve={submitAchieve}
      />
    </>
  );
};

export default AchieveCreatePage;
