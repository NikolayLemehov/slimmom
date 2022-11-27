import styled from '@emotion/styled';

export const FormLabel = styled.label`
  display: block;
  position: relative;
  height: 46px;

  &:focus-within span {
    bottom: 25px;

    font-size: 12px;
    color: #fc842d;

    @media screen and (min-width: 768px) {
      bottom: 32px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

export const LabelName = styled.span`
  position: absolute;
  bottom: 8px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;

  transition: bottom 300ms ease, color 300ms ease, font-size 300ms ease;
  z-index: 10;
  @media screen and (min-width: 768px) {
    bottom: 20px;
  }
`;

export const Input = styled.input`
  position: absolute;
  bottom: 0;

  width: 100%;
  /* padding-bottom: 0px; */

  letter-spacing: 0.04em;

  border-bottom: 1px solid #e0e0e0;

  transition: border-color 300ms ease;

  @media screen and (min-width: 768px) {
    padding-bottom: 5px;
  }

  &:focus-within {
    border-bottom: 1px solid #fc842d;
    outline: none;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid #fc842d;
  }

  &:not(:placeholder-shown) ~ span {
    bottom: 25px;
    color: #fc842d;

    font-size: 12px;
    @media screen and (min-width: 768px) {
      bottom: 32px;
    }
  }
`;
