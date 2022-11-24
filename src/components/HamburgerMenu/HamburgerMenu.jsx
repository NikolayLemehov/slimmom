import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';

const HamburgerMenu = () => {
  const [display, changeDisplay] = useState('none');
  return (
    <Flex>
      {display === 'none' && (
        <Flex pos="fixed" top="23px" right={{ xs: '15px', md: '25px' }}>
          <IconButton
            bgColor="transparent"
            aria-label="Open Menu"
            size="sm"
            icon={<HamburgerIcon />}
            display={{ lg: 'none' }}
            onClick={() => changeDisplay('flex')}
          />
        </Flex>
      )}
      <Flex
        w="100vw"
        bgColor="#264061"
        zIndex={20}
        h="100vh"
        position="absolute"
        top="78px"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex pos="fixed" top="23px" right={{ xs: '15px', md: '25px' }}>
          <IconButton
            aria-label="Close Button"
            bgColor="transparent"
            size="sm"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex
          h="100vh"
          alignItems="center"
          textAlign="center"
          flexDir="column"
          gap="5"
          mt={{ xs: '60px', md: '100px' }}
        >
          <Box>
            <Link
              _hover={{ textDecor: 'none', color: '#9B9FAA' }}
              fontFamily="-moz-initial"
              fontSize="18px"
              as={NavLink}
              to="/calculator"
              mr="16px"
              color="#FFFFFF"
            >
              CALCULATOR
            </Link>
          </Box>
          <Box>
            <Link
              _hover={{ textDecor: 'none', color: '#9B9FAA' }}
              fontFamily="-moz-initial"
              fontSize="18px"
              as={NavLink}
              to="/diary"
              color="#FFFFFF"
            >
              DIARY
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HamburgerMenu;
