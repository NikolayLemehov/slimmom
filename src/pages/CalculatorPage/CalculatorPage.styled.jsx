import styled from '@emotion/styled';
import desktopMainBg from '../../images/bg/desktopMainBg.png';

export const BgImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  width: 100vw;
  height: 100vh;

  background-image: url(${desktopMainBg});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
`;
