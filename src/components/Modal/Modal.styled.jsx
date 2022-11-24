import styled from '@emotion/styled';
export const List = styled.ul`
  width: 100%;
  height: 150px;

  color: '#9B9FAA';
  overflow: hidden;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    width: 6px;
  }

  &&::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &&::-webkit-scrollbar-thumb {
    background: #264061;
  }

  &&::-webkit-scrollbar-thumb:hover {
    background: #101a28;
  }
`;
