import { NavLink } from 'react-router-dom';
import { Divider, Flex, Link } from '@chakra-ui/react';
import BigLogo from '../../assets/logo/bigLogo.svg';

const DesktopLogo = () => {
  return (
    <Flex
      gap="20px"
      alignItems="baseline"
      display={{ base: 'none', lg: 'flex' }}
    >
      <Link as={NavLink} to="/">
        <img src={BigLogo} alt="Logo" width="166px" height="66px" />
      </Link>
      <Divider orientation="vertical" h="32px" w="1px" bgColor=" #E0E0E0" />
    </Flex>
  );
};

export default DesktopLogo;
