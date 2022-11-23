import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 512px;
    align-items: start;
  }

  @media screen and (min-width: 1280px) {
    align-items: end;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 12px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;

  color: #212121;

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-top: 140px;
    margin-bottom: 48px;

    font-size: 34px;
    line-height: 1.2;
  }
`;

export const NameLabel = styled.p`
  margin-top: 15px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
  }
`;
