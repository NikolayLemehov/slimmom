import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

const Header = () => {
  return (
    <>
      <Stack direction="row" p={4} align="end" gap="2">
        <Link to="/" mb="1">
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
      </Stack>
      <Box
        bgColor="#F0F1F3"
        minW={{ xs: '768px', md: '517px' }}
        maxW={{ lg: '517px' }}
        py={{ xs: '40px', md: '80px', lg: '166px' }}
        display="flex"
        flexDir={{ xs: 'column', md: 'row', lg: 'column' }}
        gap={{ xs: '40px', md: '97px', lg: '60px' }}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'baseline', lg: 'center' }}
        ml={{ lg: 'auto' }}
      >
        <Box w="288px">
          <Heading fontSize="14px" textAlign="center" mb="20px" color="#212121">
            Summary for 06/20/2020
          </Heading>
          <List color="#9B9FAA">
            <ListItem display="flex" justifyContent="space-between">
              <Text>Left</Text>
              <Text>000 kcal</Text>
            </ListItem>
            <ListItem display="flex" justifyContent="space-between">
              <Text>Consumed</Text>
              <Text>000 kcal</Text>
            </ListItem>
            <ListItem display="flex" justifyContent="space-between">
              <Text>Daily rate</Text>
              <Text>000 kcal</Text>
            </ListItem>
            <ListItem display="flex" justifyContent="space-between">
              <Text>n% of normal</Text>
              <Text>000 kcal</Text>
            </ListItem>
          </List>
        </Box>
        <Box w="288px">
          <Heading
            as="h3"
            fontSize="14px"
            textAlign="center"
            justifyContent="space-between"
            mb="20px"
            color="#212121"
          >
            Food not recommended
          </Heading>
          <List color="#9B9FAA">
            <ListItem display="flex" justifyContent="space-between">
              <Text>Left</Text>
              <Text>000 kcal</Text>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Header;
