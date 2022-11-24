import styled from '@emotion/styled';
export const List = styled.ul`
  width: 100%;
  height: 150px;

  color: '#9B9FAA';

  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #264061;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #101a28;
  }
`;
