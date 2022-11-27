import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';
import textLogo from '../../assets/logo/textLogo.svg';

const Logo = () => {
  return (
    <Flex gap="20px" alignItems="center">
      <Link as={NavLink} to="/">
        <img src={textLogo} alt="Logo" width="166px" height="66px" />
      </Link>
    </Flex>
  );
};

export default Logo;
