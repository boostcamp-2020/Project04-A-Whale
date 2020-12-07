import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  input: {
    margin: '5px 0',
    width: '100%',
  },
  outlineButton: {
    width: 'calc(50% - 10px)',
    padding: '10px 0',
    margin: '5px',
  },
  naverButton: {
    padding: '10px 0',
    width: '100%',
    margin: '5px 0',
    backgroundColor: '#19ce60',
    '&:hover': {
      backgroundColor: '#09be50',
    },
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    all: 'unset',
  },
}));

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
  height: 270px;
  overflow: hidden;
`;

export const AppTitle = styled.div`
  font-size: 2rem;
  font-family: 'Nanum Brush Script', sans-serif !important;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 30px 50px;
  border-radius: 5px;
  z-index: 20;
  background-color: #fffddd;
`;

export const WhaleWrapper = styled.div`
  position: relative;
  height: 100%;
  bottom: 0;
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
  animation: ${lightsAnim} 2s infinite ease-in-out;
`;

export const CloudWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
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

export const LoginLayout = styled.div`
  width: 100%;
  margin-top: 2rem;
  position: relative;
`;

export const LoginContainer = styled.div`
  margin: 0 auto;
  width: 40%;
  min-width: fit-content;
  height: fit-content;
`;

export const LoginBox = styled.div`
  padding: 20px;
  border: 1px solid #b6b6b6;
  box-shadow: 0 0 5px #9c9c9c;
`;
