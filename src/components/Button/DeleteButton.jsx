import { Button, ListIcon } from '@chakra-ui/react';
import { VscChromeClose } from 'react-icons/vsc';

export default function DeleteButton() {
  return (
    <Button
      type="button"
      marginRight="40px"
      background="transparent"
      rounded="50%"
      color="rgba(155, 159, 170, 1)"
      _hover={{
        background: '#FC842D',
        color: '#ffffff',
        boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
      }}
    >
      <ListIcon
        as={VscChromeClose}
        w="12px"
        h="12px"
        color="inherit"
        margin="0px"
      />
    </Button>
  );
}
