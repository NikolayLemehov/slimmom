import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { IoReturnDownBackSharp } from 'react-icons/io5';
import { Box, Icon, Link, Stack } from '@chakra-ui/react';

import { authSelectors } from 'redux/auth/authSelectors';
import SmallLogo from 'components/Logo/SmallLogo';
import textLogo from '../assets/logo/textLogo.svg';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';

const Header = () => {
  const isLogin = useSelector(authSelectors.isLoggedIn);

  return (
    <>
      <Stack
        direction="row"
        p={4}
        align="center"
        gap="2"
        borderBottom={{
          base: '2px solid #E0E0E0',
          lg: 'none',
        }}
        display="flex"
        justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        mt={{ lg: '64px' }}
      >
        {isLogin ? (
          <img src={textLogo} alt="Logo" width="166px" height="66px" />
        ) : (
          <>
            <Logo />
            <SmallLogo />
          </>
        )}

        {!isLogin ? (
          <Box>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              fontSize="14px"
              as={NavLink}
              to="/login"
              mr="16px"
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
          </Box>
        ) : (
          <Box
            display="flex"
            alignItems="baseline"
            w="100%"
            justifyContent="space-between"
            gap="16px"
          >
            <Box display={{ xs: 'none', lg: 'flex' }}>
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/calculator"
                mr="16px"
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
            </Box>

            <Box maxW="409px" mx="auto"></Box>

            <Box display="flex" alignItems="center" gap="20px" ml="auto">
              <Box display={{ xs: 'none', sm: 'flex' }}>
                <UserMenu />
              </Box>
              <HamburgerMenu />
            </Box>
          </Box>
        )}
      </Stack>
      {isLogin && (
        <Box
          bgColor="#EFF1F3"
          w="100%"
          h="40px"
          display={{ xs: 'flex', sm: 'none' }}
        >
          <Icon as={IoReturnDownBackSharp} ml="20px" mt="12px" boxSize="5" />
          <UserMenu />
        </Box>
      )}
    </>
  );
};

export default Header;
