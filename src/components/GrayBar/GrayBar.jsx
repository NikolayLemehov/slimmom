import { Box, Flex, Icon } from '@chakra-ui/react';
import UserMenu from 'components/UserMenu/UserMenu';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const GrayBar = ({ onClick }) => {
  const location = useLocation();
  const isVisible = useMemo(
    () => !['/login', '/registration'].includes(location.pathname),
    [location]
  );

  const isLogin = useSelector(authSelectors.isLoggedIn);
  return (
    isVisible && (
      <Box display={{ md: 'none' }} w="100%">
        <Flex
          bgColor="#EFF1F3"
          w="100%"
          h="40px"
          justifyContent="end"
          alignItems="center"
          p="15px 20px"
        >
          {!isLogin && (
            <Icon as={IoReturnDownBackSharp} boxSize="6" onClick={onClick} />
          )}

          {isLogin && <UserMenu />}
        </Flex>
      </Box>
    )
  );
};

export default GrayBar;
