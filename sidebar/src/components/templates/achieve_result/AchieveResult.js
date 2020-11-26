import React from 'react';
import styled from 'styled-components';

import Hamburger from '../../UI/atoms/hamburger/Hamburger';
import LineBarAreaComposedChart from '../../UI/organisms/line_bar_area_composed_chart/LineBarAreaComposedChart';

const AchieveResult = ({ bucket, description, date }) => {
  return (
    <Layout>
      <TopFixed>
        <Hamburger />
      </TopFixed>
      <Page>
        <div className="bucketInfo">
          <h1>#01 {bucket}</h1>
          <p>{description}</p>
          <p>from {date}</p>
        </div>
        <div className="graph">
          <LineBarAreaComposedChart />
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

export default AchieveResult;
