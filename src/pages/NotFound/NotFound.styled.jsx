import styled from '@emotion/styled';
import watermelon from '../../assets/notFound/watermelon.png';
import vector from '../../assets/notFound/Vector.png';

export const NotFoundImg = styled.img`
  margin-top: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 40px;
  line-height: 1.5;

  text-align: center;

  color: #fc842d;

  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

export const BgImg = styled.div`
  /* position: absolute;
  top: 0;
  left: -20px;
  z-index: -1;

  width: 100vw;

  height: 100%; */

  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;

    width: 100vw;
    height: 500px;

    background-image: url(${watermelon}), url(${vector});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    top: 0;
    width: calc(100vw - (((100vw - 1280px) / 2) + 763px));
    height: 100vh;

    background-image: url(${watermelon}), url(${vector});
  }
`;
