import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { IoReturnDownBackSharp } from 'react-icons/io5';
import { Box, Flex, Icon, Link } from '@chakra-ui/react';

import { authSelectors } from 'redux/auth/authSelectors';
import SmallLogo from 'components/Logo/SmallLogo';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';

const Header = () => {
  const isLogin = useSelector(authSelectors.isLoggedIn);

  return (
    <>
      <Flex
        position="absolute"
        top="0"
        left="0"
        w="100%"
        p="20px"
        justifyContent="space-between"
        borderBottom={{
          base: '2px solid #E0E0E0',
          lg: 'none',
        }}
      >
        {!isLogin ? (
          <Flex>
            <Box display={{ xs: 'none', md: 'flex' }}>
              <Logo />
            </Box>
            <Box display={{ xs: 'flex', md: 'none' }}>
              <SmallLogo />
            </Box>

            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              fontSize="14px"
              as={NavLink}
              to="/login"
            >
              SIGIN IN
            </Link>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              fontSize="14px"
              as={NavLink}
              to="/registration"
            >
              REGISTRATION
            </Link>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" w="100%">
            <Flex alignItems="center" gap="20px">
              <Logo />
              <Flex display={{ xs: 'none', lg: 'flex' }}>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontFamily="-moz-initial"
                  fontSize="14px"
                  as={NavLink}
                  to="/calculator"
                >
                  CALCULATOR
                </Link>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontFamily="-moz-initial"
                  fontSize="14px"
                  as={NavLink}
                  to="/diary"
                >
                  DIARY
                </Link>
              </Flex>
            </Flex>

            <Flex display="flex" alignItems="center">
              <Box display={{ xs: 'none', sm: 'flex' }}>
                <UserMenu />
              </Box>
              <HamburgerMenu />
            </Flex>
          </Flex>
        )}
      </Flex>
      {isLogin && (
        <Box bgColor="#EFF1F3" h="40px" display={{ xs: 'flex', sm: 'none' }}>
          <Icon as={IoReturnDownBackSharp} ml="20px" mt="12px" boxSize="5" />
          <UserMenu />
        </Box>
      )}
    </>
  );
};

export default Header;
