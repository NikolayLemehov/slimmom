import CalculatorСalorieForm from '../../components/CalculatorСalorieForm/CalculatorСalorieForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';

import { BgImg, Wrapper } from './CalculatorPage.styled';
import { Box } from '@chakra-ui/react';

export default function CalculatorPage() {
  return (
    <Wrapper>
      <Box>
        <CalculatorСalorieForm />
      </Box>
      <Box position="relative">
        <RightSideBar />
        <BgImg />
      </Box>
    </Wrapper>
  );
}
