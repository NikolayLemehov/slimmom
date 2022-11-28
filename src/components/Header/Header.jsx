import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Box, Flex, Link } from '@chakra-ui/react';

import { authSelectors } from 'redux/auth/authSelectors';
import SmallLogo from 'components/Logo/SmallLogo';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import GrayBar from 'components/GrayBar/GrayBar';
import DesktopLogo from 'components/Logo/BigLogo';

const Header = ({ onClick }) => {
  const isLogin = useSelector(authSelectors.isLoggedIn);

  const getStyle = ({ isActive }) =>
    isActive ? { color: '#212121' } : { color: '#9B9FAA' };

  return (
    <>
      <Flex
        position="absolute"
        top={{ lg: '80px', xs: '20px' }}
        left="0"
        w="100%"
        pb={{ xs: '16px', lg: '0px' }}
        px={{ xs: '16px', md: '32px', lg: '16px' }}
        zIndex="100"
        justifyContent="space-between"
        borderBottom={{
          base: '2px solid #E0E0E0',
          lg: 'none',
        }}
      >
        {!isLogin ? (
          <Flex
            alignItems={{ xs: 'center', lg: 'end' }}
            gap="20px"
            w="100%"
            justifyContent={{ xs: 'space-between', lg: 'flex-start' }}
          >
            <Box>
              <DesktopLogo />
              <Flex display={{ xs: 'none', md: 'flex', lg: 'none' }}>
                <Logo />
              </Flex>
              <Flex display={{ xs: 'flex', md: 'none' }}>
                <SmallLogo />
              </Flex>
            </Box>
            <Flex gap="20px">
              <Link
                _hover={{ textDecor: 'none' }}
                fontSize="14px"
                as={NavLink}
                to="/login"
                style={getStyle}
                fontFamily="secondary"
                fontWeight="700"
              >
                SIGN IN
              </Link>
              <Link
                _hover={{ textDecor: 'none' }}
                fontSize="14px"
                as={NavLink}
                to="/registration"
                style={getStyle}
                fontFamily="secondary"
                fontWeight="700"
              >
                REGISTRATION
              </Link>
            </Flex>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" w="100%">
            <Flex alignItems={{ xs: 'center', lg: 'end' }} gap="20px">
              <DesktopLogo />
              <Box display={{ lg: 'none' }}>
                <Logo />
              </Box>
              <Flex display={{ xs: 'none', lg: 'flex' }} gap="16px">
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontSize="14px"
                  as={NavLink}
                  to="/calculator"
                  style={getStyle}
                  fontFamily="secondary"
                  fontWeight="700"
                >
                  CALCULATOR
                </Link>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontSize="14px"
                  as={NavLink}
                  to="/diary"
                  style={getStyle}
                  fontFamily="secondary"
                  fontWeight="700"
                >
                  DIARY
                </Link>
              </Flex>
            </Flex>

            <Flex display="flex" alignItems={{ xs: 'center', lg: 'end' }}>
              <Box display={{ xs: 'none', md: 'flex' }} mr="53px">
                <UserMenu />
              </Box>
              <HamburgerMenu />
            </Flex>
          </Flex>
        )}
        <Box position="absolute" bottom="-42px" left="0" w="100%">
          {isLogin && <GrayBar onClick={onClick} />}
        </Box>
      </Flex>
    </>
  );
};

export default Header;
