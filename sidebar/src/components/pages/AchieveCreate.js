import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { reset, changeInput, addInput, setAchieve } from '../../modules/achieve';
import AchieveCreateLayout from '../templates/achieve_create';
import Header from '../UI/organisms/header';

const bucketState = {
  bucket: '부스트캠프 수료',
  description: '멤버십을 훌륭하게 해내고 싶습니다. ',
  date: '2020.07.27',
};

const AchieveCreate = ({ match }) => {
  const { bucketNo } = match.params;
  const acheiveState = useSelector((state) => state.acheiveState, []);
  const dispatch = useDispatch();
  const history = useHistory();

  const acheiveChangeHandler = useCallback((e) => {
    dispatch(changeInput(e.target.value));
  }, []);
  const acheiveAddHandler = useCallback((input) => {
    dispatch(addInput(input));
  }, []);
  const setAchieveHandler = useCallback(async () => {
    if (acheiveState.input) {
      dispatch(setAchieve({ description: acheiveState.input, bucketNo }));
    } else {
      alert('글을 입력해주세요.');
    }
  }, [acheiveState]);

  // todo useEffect: bucketState 불러오기
  useEffect(() => {
    if (acheiveState.success) {
      dispatch(reset());
      history.push(`/achieves/${bucketNo}/result`);
    }
  }, [acheiveState]);

  return (
    <>
      <Header title="목표 달성 소감" isGoBack />
      <AchieveCreateLayout
        bucketState={bucketState}
        acheiveState={acheiveState}
        acheiveChangeHandler={acheiveChangeHandler}
        acheiveAddHandler={acheiveAddHandler}
        setAchieveHandler={setAchieveHandler}
      />
    </>
  );
};

export default AchieveCreate;
