import styled, { keyframes } from 'styled-components';

const lightsAnim = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

const cloud1Anim = keyframes`
    0% {
      transform: translate(0px, 130px);
    }
    50% {
      transform: translate(-20px, 130px);
    }
    100% {
      transform: translate(0px, 130px);
    }
  `;

const cloud2Anim = keyframes`
    0% {
      transform: translate(0px, 180px);
    }
    50% {
      transform: translate(30px, 180px);
    }
    100% {
      transform: translate(0px, 180px);
    }
  `;

const cloud3Anim = keyframes`
    0% {
      transform: translate(200px, 60px);
    }
    50% {
      transform: translate(240px, 60px);
    }
    100% {
      transform: translate(200px, 60px);
    }
  `;

const cloud4Anim = keyframes`
    0% {
      transform: translate(-200px, 80px);
    }
    50% {
      transform: translate(-240px, 80px);
    }
    100% {
      transform: translate(-200px, 80px);
    }
  `;

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
`;

export const AppTitle = styled.div`
  font-size: 2.7rem;
  font-family: 'Bazzi', sans-serif !important;
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 30px 50px;
  border-radius: 5px;
  z-index: 20;
`;

export const WhaleWrapper = styled.div`
  position: relative;
  margin-top: 98px;
  height: 100%;
`;

export const WhaleLogo = styled.img`
  position: absolute;
  bottom: 65%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100px;
  height: 100px;
  z-index: 5;
`;

export const WhaleLight = styled.div`
  position: absolute;
  bottom: 65%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(149, 243, 255, 0.2);
  animation: ${lightsAnim} 2s infinite ease-in-out;
`;

export const CloudWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 56%;
  transform: translate(-50%, 0);
  width: 750px;
  height: 200px;
  z-index: 10;
`;

export const Cloud1 = styled.path`
  animation: ${cloud1Anim} 10s infinite ease-in-out;
`;

export const Cloud2 = styled.path`
  animation: ${cloud2Anim} 12s infinite ease-in-out;
`;

export const Cloud3 = styled.path`
  animation: ${cloud3Anim} 10s infinite ease-in-out;
`;

export const Cloud4 = styled.path`
  animation: ${cloud4Anim} 12s infinite ease-in-out;
`;
