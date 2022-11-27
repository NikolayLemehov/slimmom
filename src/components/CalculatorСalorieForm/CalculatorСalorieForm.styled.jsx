import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  width: 100%;
  padding-bottom: 41px;

  @media screen and (min-width: 768px) {
    align-items: start;

    width: 512px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    align-items: end;
    /* padding-bottom: 111px; */
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 72px;
  margin-bottom: 10px;

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
  margin-top: 5px;
  margin-bottom: 8px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #fc842d;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
`;

// Radio Buttons
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 4px;
  }
`;

export const RadioInput = styled.input`
  /* display: none; */
  position: absolute;
  width: 0px;
  height: 0px;

  &&:checked ~ span {
    font-weight: 700;

    color: #fc842d;
  }
  &&:checked + div div {
    background-color: #fc842d;
  }
`;

export const RadioValue = styled.span`
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;
  transition: color 300ms ease, font-size 300ms ease, font-weight 300ms ease;
`;

export const CheckedBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;

  background-color: transparent;

  transition: background-color 300ms ease;
`;
