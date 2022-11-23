import { HamburgerIcon } from '@chakra-ui/icons';
import { Divider, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';
import logo from '../assets/logo/logo.png';

const Header = () => {
  const isLogin = useSelector(authSelectors.isLoggedIn);

  return (
    <>
      <Stack direction="row" p={4} align="end" gap="2">
        {!isLogin ? (
          <>
            <Link as={NavLink} to="/" mb="1">
              <img src={logo} alt="Logo" />
            </Link>
            <Divider orientation="vertical" h="7" border="1px solid #9d9999" />
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              as={NavLink}
              to="/login"
            >
              SIGIN IN
            </Link>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              as={NavLink}
              to="/registration"
            >
              REGISTRATION
            </Link>
          </>
        ) : (
          <>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              as={NavLink}
              to="/calculator"
            >
              CALCULATOR
            </Link>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              as={NavLink}
              to="/diary"
            >
              DIARY
            </Link>
            <Text>Name</Text>
            <Divider orientation="vertical" h="7" border="1px solid #9d9999" />
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              as={NavLink}
              to="/"
            >
              EXIT
            </Link>
            <IconButton
              aria-label="Open Menu"
              size="sm"
              mr={2}
              icon={<HamburgerIcon />}
              background="transparent"
            />
          </>
        )}
      </Stack>
    </>
  );
};

export default Header;
