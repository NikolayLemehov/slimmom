import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  max-height: 300px;

  color: #9b9faa;
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

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 42.19%
  );
`;
