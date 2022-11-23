import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import smallLogo from '../assets/logo/smallLogo.svg';

const SmallLogo = () => {
  return (
    <Box display={{ xs: 'block', sm: 'none' }}>
      <Link as={NavLink} to="/" mb="1">
        <img src={smallLogo} alt="Logo" width="47px" height="44px" />
      </Link>
    </Box>
  );
};

export default SmallLogo;
