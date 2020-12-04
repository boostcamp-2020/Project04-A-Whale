import React from 'react';
import AchieveResultLayout from '../templates/achieve_result';
import Header from '../UI/organisms/header';

const AchieveResultPage = () => {
  return (
    <>
      <Header title="목표 달성 소감" isGoBack />
      <AchieveResultLayout
        bucket="부스트캠프 수료"
        description="멤버십을 훌륭하게 해내고 싶습니다. "
        date="2020.07.27"
      />
    </>
  );
};

export default AchieveResultPage;
