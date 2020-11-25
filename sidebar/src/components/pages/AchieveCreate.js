import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeInput } from '../../modules/achieve';
import AchieveCreateLayout from '../templates/achieve_create/AchieveCreate';

const AchieveCreate = () => {
  const acheiveState = useSelector((state) => state.acheiveState, []);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(changeInput(e.target.value));
  };
  return (
    <AchieveCreateLayout
      head="목표 달성 소감"
      bucket="부스트캠프 수료"
      description="멤버십을 훌륭하게 해내고 싶습니다. "
      date="2020.07.27"
      text={acheiveState.input}
      onChange={onChangeHandler}
    />
  );
};

export default AchieveCreate;
