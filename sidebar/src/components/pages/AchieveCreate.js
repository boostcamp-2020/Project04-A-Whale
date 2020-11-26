import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeInput } from '../../modules/achieve';
import AchieveCreateLayout from '../templates/achieve_create/AchieveCreate';

const bucketState = {
  bucket: '부스트캠프 수료',
  description: '멤버십을 훌륭하게 해내고 싶습니다. ',
  date: '2020.07.27',
};

const AchieveCreate = ({ history }) => {
  const acheiveState = useSelector((state) => state.acheiveState, []);
  const dispatch = useDispatch();
  const acheiveChangeHandler = (e) => {
    dispatch(changeInput(e.target.value));
  };
  return (
    <AchieveCreateLayout
      history={history}
      bucketState={bucketState}
      acheiveState={acheiveState}
      acheiveChangeHandler={acheiveChangeHandler}
    />
  );
};

export default AchieveCreate;
