import { Box, Flex, Icon } from '@chakra-ui/react';
import UserMenu from 'components/UserMenu/UserMenu';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

const GrayBar = ({ onClick }) => {
  const isLogin = useSelector(authSelectors.isLoggedIn);
  return (
    <Box display={{ md: 'none' }} w="100%">
      <Flex
        bgColor="#EFF1F3"
        w="100%"
        h="40px"
        justifyContent="space-between"
        alignItems="center"
        p="15px 20px"
      >
        <Icon as={IoReturnDownBackSharp} boxSize="6" onClick={onClick} />
        {isLogin && <UserMenu />}
      </Flex>
    </Box>
  );
};

export default GrayBar;
