import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: end;
  color: #212121;
  line-height: 1.21;
  letter-spacing: 0.04em;
  font-size: 14px;
  height: max-content;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;
