import React from 'react';
import styled from 'styled-components';

import Hamburger from '../../UI/atoms/hamburger/Hamburger';
import WritingTab from '../../UI/organisms/writing_tab/WritingTab';

const AchieveCreate = ({ head, bucket, description, date, text, onChange }) => {
  return (
    <Layout>
      <TopFixed>
        <Hamburger />
      </TopFixed>
      <Page>
        <div className="pageTitle">
          <h1>{head}</h1>
        </div>
        <div className="bucketInfo">
          <h2>#01 {bucket}</h2>
          <p>{description}</p>
          <p>from {date}</p>
        </div>
        <div className="writeImpression">
          <WritingTab placeholder="목표 달성 소감을 남겨주세요." text={text} onChange={onChange} />
        </div>
      </Page>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
`;

const TopFixed = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
`;

const Page = styled.div`
  width: 80vw;
  max-width: calc(100% - 140px);
  margin: 0 auto;
  margin-top: 50px;
`;

export default AchieveCreate;
