import { Box, Icon } from '@chakra-ui/react';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

const GrayBar = onClick => {
  const params = useParams();
  console.log('params :>> ', params);
  return (
    <Box display={{ md: 'none' }} w="100%">
      <Box
        bgColor="#EFF1F3"
        w="100%"
        h="40px"
        display={{ xs: 'flex', md: 'none' }}
      >
        <Icon
          as={IoReturnDownBackSharp}
          ml="20px"
          mt="12px"
          boxSize="5"
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};

export default GrayBar;
