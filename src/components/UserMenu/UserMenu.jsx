import { NavLink } from 'react-router-dom';
import { Divider, Flex, Link, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <Flex alignItems="center" gap="15px">
      <Text>Name</Text>
      <Divider orientation="vertical" h="7" border="1px solid #9d9999" />
      <Link
        _hover={{ textDecor: 'none' }}
        fontFamily="-moz-initial"
        fontSize="14px"
        as={NavLink}
        to="/"
        pt="1"
        onClick={() => dispatch(authOperations.logOut())}
      >
        EXIT
      </Link>
    </Flex>
  );
};

export default UserMenu;
