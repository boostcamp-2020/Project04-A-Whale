import React, { useState } from 'react';
import styled from 'styled-components';

import GoBackButton from '../../UI/atoms/go_back_button';
import WritingTab from '../../UI/organisms/writing_tab/WritingTab';
import AlertDialog from '../../UI/organisms/alert_dialog';

const AchieveCreate = ({ history, bucketState, acheiveState, acheiveChangeHandler }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goBack = () => {
    setOpen(false);
    history.goBack();
  };

  // AlertDialog에서 findDOMNode is deprecated in StrictMode 발생

  return (
    <Layout>
      <div>
        <GoBackButton onClick={handleClickOpen} />
      </div>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="[목표 달성] 소감 작성 취소"
        description="작성 중인 글이 저장되지 않았습니다. 나가시겠습니까?"
        yes="나가기"
        no="머무르기"
        yesClick={goBack}
      />
      <Page>
        <div className="pageTitle">
          <h1>[목표 달성] 소감</h1>
        </div>
        <div className="bucketInfo">
          <h2>#01 {bucketState.bucket}</h2>
          <p>{bucketState.description}</p>
          <p>from {bucketState.date}</p>
        </div>
        <div className="writeImpression">
          <WritingTab
            placeholder="목표 달성 소감을 남겨주세요."
            text={acheiveState.input}
            onChange={acheiveChangeHandler}
          />
        </div>
      </Page>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
`;

// const TopFixed = styled.div`
//   position: fixed;
//   top: 0px;
//   left: 0px;
// `;

const Page = styled.div`
  width: 85vw;
  max-width: calc(100% - 140px);
  margin: 0 auto;
`;

export default AchieveCreate;
