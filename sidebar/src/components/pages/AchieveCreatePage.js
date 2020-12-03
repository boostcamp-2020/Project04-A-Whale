import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { reset, changeInput, setAchieve } from '../../modules/achieve';
import AchieveCreateLayout from '../templates/achieve_create';
import Header from '../UI/organisms/header';

const bucketState = {
  bucket: '부스트캠프 수료',
  description: '멤버십을 훌륭하게 해내고 싶습니다. ',
  date: '2020.07.27',
};

const AchieveCreatePage = ({ match }) => {
  const { bucketNo } = match.params;
  const acheiveState = useSelector((state) => state.acheiveState, []);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeAchieve = useCallback((text) => {
    dispatch(changeInput(text));
  }, []);

  const submitAchieve = useCallback((text) => {
    dispatch(setAchieve({ description: text, bucketNo }));
  }, []);

  useEffect(() => {
    if (acheiveState.message) {
      dispatch(reset());
      history.replace(`/achieves/${bucketNo}/result`);
    }
  }, [acheiveState]);

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
