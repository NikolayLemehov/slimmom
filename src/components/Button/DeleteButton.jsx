import { Button, ListIcon } from '@chakra-ui/react';
import { VscChromeClose } from 'react-icons/vsc';

export default function DeleteButton() {
  return (
    <Button
      type="button"
      marginRight={{ xs: '0px', md: '40px' }}
      background="transparent"
      color="rgba(155, 159, 170, 1)"
      p="4px"
      maxW="20px"
      maxH="20px"
      _hover={{
        color: '#FC842D',
      }}
    >
      <ListIcon
        as={VscChromeClose}
        maxW="12px"
        maxH="12px"
        color="inherit"
        margin="0px"
        p="0px"
      />
    </Button>
  );
}
